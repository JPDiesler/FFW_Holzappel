import warncellids from "../assets/warncellids.json";

const DWD_BASE_URL = "https://maps.dwd.de/geoserver/dwd/ows";

/**
 * Retrieves DWD warnings for a given location.
 * @param {string} location - The location for which to retrieve warnings.
 * @returns {Promise<Array>} - A promise that resolves to an array of warning objects.
 * @throws {Error} - If no matching warning cell IDs are found for the location.
 */
export async function getDWDWarnings(location) {
  const geocodingData = await geocode(location);

  const gemeinde_warncellID = getWarnCellIDs(geocodingData.name, 0)[0];
  const kreis_warncellID = getWarnCellIDs(geocodingData.county, 1)[0];

  if (!kreis_warncellID && !gemeinde_warncellID) {
    throw new Error(`No matching warning cell IDs found for "${location}".`);
  }

  const API_URL_DWD_Kreise = new URL(DWD_BASE_URL);
  API_URL_DWD_Kreise.search = new URLSearchParams({
    service: "WFS",
    version: "2.0.0",
    request: "GetFeature",
    typeName: "dwd%3AWarnungen_Landkreise",
    CQL_FILTER: `GC_WARNCELLID%3D%27${kreis_warncellID}%27`,
    OutputFormat: "application/json",
  });

  const API_URL_DWD_Gemeinden = new URL(DWD_BASE_URL);
  API_URL_DWD_Gemeinden.search = new URLSearchParams({
    service: "WFS",
    version: "2.0.0",
    request: "GetFeature",
    typeName: "dwd%3AWarnungen_Gemeinden",
    CQL_FILTER: `WARNCELLID%3D%27${gemeinde_warncellID}%27`,
    OutputFormat: "application/json",
  });

  try {
    const [responseGemeinde, responseKreise] = await Promise.allSettled([
      fetch(API_URL_DWD_Gemeinden).then((res) =>
        res.ok
          ? res
          : Promise.reject(`Failed to fetch Gemeinden: ${res.status}`)
      ),
      fetch(API_URL_DWD_Kreise).then((res) =>
        res.ok ? res : Promise.reject(`Failed to fetch Kreise: ${res.status}`)
      ),
    ]);

    const settledResponses = [responseGemeinde, responseKreise].map(
      (response, index) =>
        handleResponse(response, index === 0 ? "Gemeinden" : "Kreise")
    );

    const [dataGemeinde, dataKreis] = await Promise.allSettled(
      settledResponses
    );

    let newWarnings = [];

    if (dataGemeinde.status === "fulfilled") {
      newWarnings = newWarnings.concat(
        dataGemeinde.value.features?.map((feature) =>
          translate(feature.properties)
        )
      );
    }

    if (dataKreis.status === "fulfilled") {
      newWarnings = newWarnings.concat(
        dataKreis.value.features?.map((feature) =>
          translate(feature.properties)
        )
      );
    }

    newWarnings = newWarnings.filter(
      (warning, index, self) =>
        index ===
        self.findIndex(
          (t) =>
            t.headline === warning.headline &&
            t.description === warning.description &&
            t.level === warning.level
        )
    );
    return newWarnings.sort((a, b) => b.level - a.level);
  } catch (error) {
    console.error(error);
  }
}

/**
 * Handles the response from the DWD API.
 * @param {Object} response - The response object from the API.
 * @param {string} type - The type of response (Gemeinden or Kreise).
 * @returns {Promise<Object>} - A promise that resolves to the parsed response data.
 */
async function handleResponse(response, type) {
  if (response.status === "fulfilled") {
    try {
      return await response.value.json();
    } catch (error) {
      throw new Error(`Failed to parse JSON for ${type}: ${error.message}`);
    }
  } else {
    throw new Error(
      `Failed to fetch data from API for ${type}: ${response.reason}`
    );
  }
}

/**
 * Translates the properties of a warning feature into a standardized format.
 * @param {object} properties - The properties of a warning feature.
 * @returns {object} - The translated properties in a standardized format.
 */
function translate(obj) {
  const levels = {
    Minor: 1,
    Moderate: 2,
    Severe: 3,
    Extreme: 4,
  };
  const new_obj = {
    event: obj.EVENT.toLowerCase().split(" ").join(""),
    level: levels[obj.SEVERITY],
    headline: obj.HEADLINE,
    description: obj.DESCRIPTION,
    effective: formatTime(obj.EFFECTIVE),
    expires: formatTime(obj.EXPIRES),
  };
  return new_obj;
}

/**
 * Formats a given time string into a specific format used in the German language.
 * @param {string} time - The time string to be formatted.
 * @returns {string} - The formatted date and time string in the format "dd.mm.yyyy hh:mm Uhr".
 */
function formatTime(time) {
  const date = new Date(time);
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  const optionsTime = {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  };
  const formattedDate = new Intl.DateTimeFormat("de-DE", options).format(date);
  const formattedTime = date.toLocaleTimeString("de-DE", optionsTime);

  // Concatenate date and time without commas
  return `${formattedDate.replace(/,/g, "")} ${formattedTime} Uhr`;
}

/**
 * Retrieves the warning cell IDs for a given location.
 * @param {string} name - The name of the location.
 * @param {number} type - The type of location (0 for gemeinde, 1 for kreis).
 * @returns {Array<string>} - An array of warning cell IDs.
 */
function getWarnCellIDs(location, mode) {
  let possible = null;
  if (mode == 0) {
    possible = [
      location,
      "Gemeinde " + location,
      "Stadt " + location,
      "Kreis und Stadt " + location,
    ];
  } else {
    possible = [location];
  }
  const results = [];

  possible.forEach((element) => {
    const result = warncellids[element];
    if (result) {
      results.push(result);
    }
  });
  return results;
}

/**
 * Retrieves the geocoding data for a given location.
 * @param {string} location - The location for which to retrieve geocoding data.
 * @returns {Promise<Object>} - A promise that resolves to the geocoding data object.
 */
async function geocode(location) {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?city=${encodeURIComponent(
      location
    )}&format=json&addressdetails=1&limit=1`
  );
  const data = await response.json();

  if (data.length > 0) {
    const item = data[0];
    return {
      name: item.name,
      county: item.address && item.address.county,
    };
  } else {
    throw new Error(`Geocoding error: No results found for ${location}`);
  }
}
