const BASE_URL = 'http://10.10.22.236:4000/mascots';

async function fetchMascots() {
  return fetch(BASE_URL)
    .then((response) => response.json())
    .catch((err) => {
      console.log(err);
    });
}
module.exports = { fetchMascots };
