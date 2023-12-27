import warncellids from "../assets/warncellids.json";
/**
 * Retrieves weather warnings from the DWD (German Weather Service) API based on a given community ID.
 * Translates the retrieved data into a standardized format, sorts the warnings by severity level,
 * and returns the sorted warnings.
 * @param {string} location - The ID of the community for which weather warnings are requested.
 * @returns {Array} - The retrieved weather warnings.
 */
export async function getDWDWarnings(location) {
  const warncellIDs = getWarnCellIDs(location);
  const gemeinde_warncellID = warncellIDs.stadt[0]?.id;
  const kreis_warncellID = warncellIDs.kreis.slice(-1)[0]?.id;

  if (!kreis_warncellID && !gemeinde_warncellID) {
    throw new Error(`No matching warning cell IDs found for "${location}".`);
  }

  const API_URL_DWD_Kreise = `https://maps.dwd.de/geoserver/dwd/ows?service=WFS&version=2.0.0&request=GetFeature&typeName=dwd%3AWarnungen_Landkreise&CQL_FILTER=GC_WARNCELLID%3D%27${kreis_warncellID}%27&OutputFormat=application/json`;
  const API_URL_DWD_Gemeinden = `https://maps.dwd.de/geoserver/dwd/ows?service=WFS&version=2.0.0&request=GetFeature&typeName=dwd%3AWarnungen_Gemeinden&CQL_FILTER=WARNCELLID%3D%27${gemeinde_warncellID}%27&OutputFormat=application/json`;

  try {
    const [responseGemeinde, responseKreise] = await Promise.allSettled([
      fetch(API_URL_DWD_Gemeinden),
      fetch(API_URL_DWD_Kreise),
    ]);

    const settledResponses = [responseGemeinde, responseKreise].map(
      (response) => {
        if (response.status === "fulfilled") {
          return response.value.json();
        } else {
          throw new Error(
            `Failed to fetch data from API for ${response.reason}`
          );
        }
      }
    );

    const [dataGemeinde, dataKreis] = await Promise.allSettled(
      settledResponses
    );

    let newWarnings =
      dataGemeinde.status === "fulfilled"
        ? dataGemeinde.value.features?.map((feature) =>
            translate(feature.properties)
          )
        : [];

    if (newWarnings.length === 0) {
      newWarnings =
        dataKreis.status === "fulfilled"
          ? dataKreis.value.features?.map((feature) =>
              translate(feature.properties)
            )
          : [];
    }
    return newWarnings.sort((a, b) => b.level - a.level);
  } catch (error) {
    throw new Error("Fehler beim Abrufen der DWD-Warnungen: " + error.message);
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

function getWarnCellIDs(location) {
  const possible = [
    location,
    "Gemeinde" + location,
    "Stadt " + location,
    "Kreis " + location,
    "Landkreis " + location,
    "Kreis und Stadt " + location,
  ];
  const results = {
    stadt: [],
    kreis: [],
  };

  for (const [key, value] of Object.entries(warncellids)) {
    if (key.includes(location)) {
      if (!key.toLowerCase().includes("kreis")) {
        results.stadt.push({ name: key, id: value });
      } else {
        results.kreis.push({ name: key, id: value });
      }
    }
  }
  console.log(results);
  return results;
}
