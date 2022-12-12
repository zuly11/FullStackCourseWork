const BASE_URL = "https://api.harvardartmuseums.org";
const KEY = "apikey=ca2891dc-d387-492a-a2ec-137d467771b0"; // USE YOUR KEY HERE

async function fetchObjects() {
  const url = `${BASE_URL}/object?${KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}

fetchObjects().then((x) => console.log(x)); // { info: {}, records: [{}, {},]}
