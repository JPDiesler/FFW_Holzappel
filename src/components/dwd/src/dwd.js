/**
 * Retrieves weather warnings from the DWD (German Weather Service) API based on a given community ID.
 * Translates the retrieved data into a standardized format, sorts the warnings by severity level,
 * and sets the sorted warnings using a provided `set` function.
 * @param {string} communityID - The ID of the community for which weather warnings are requested.
 * @param {function} set - A function that sets the retrieved weather warnings.
 */
export async function getDWDWarnings(communityID, set) {
  const dwdApiUrlCounties = `https://maps.dwd.de/geoserver/dwd/ows?service=WFS&version=2.0.0&request=GetFeature&typeName=dwd%3AWarnungen_Landkreise&CQL_FILTER=GC_WARNCELLID%3D%27${communityID}%27&OutputFormat=application/json`;
  const dwdApiUrlCities = `https://maps.dwd.de/geoserver/dwd/ows?service=WFS&version=2.0.0&request=GetFeature&typeName=dwd%3AWarnungen_Gemeinden&CQL_FILTER=WARNCELLID%3D%27${communityID}%27&OutputFormat=application/json`;

  try {
    const response = await fetch(dwdApiUrlCities);
    const data = await response.json();
    let newWarnings = data.features.map((feature) =>
      translate(feature.properties)
    );

    if (newWarnings.length === 0) {
      const countyResponse = await fetch(dwdApiUrlCounties);
      const countyData = await countyResponse.json();
      newWarnings = countyData.features.map((feature) =>
        translate(feature.properties)
      );
    }

    newWarnings = quickSort(newWarnings, "level");
    set(newWarnings);
  } catch (error) {
    console.error("Fehler beim Abrufen der DWD-Warnungen:", error);
  }
}

/**
 * Translates the properties of a warning feature into a standardized format.
 * @param {object} properties - The properties of a warning feature.
 * @returns {object} - The translated properties in a standardized format.
 */
function translate(properties) {
  // Translate properties to standardized format
  // ...

  return translatedProperties;
}

/**
 * Sorts an array of warnings by severity level using the quicksort algorithm.
 * @param {array} warnings - The array of warnings to be sorted.
 * @param {string} sortBy - The property to sort the warnings by.
 * @returns {array} - The sorted array of warnings.
 */
function quickSort(warnings, sortBy) {
  // Sort warnings by severity level using quicksort algorithm
  // ...

  return sortedWarnings;
}

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

function quickSort(arr, attribute) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i][attribute] > pivot[attribute]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left, attribute), pivot, ...quickSort(right, attribute)];
}

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
