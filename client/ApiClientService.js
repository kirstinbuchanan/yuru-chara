const MASCOTS_URL = 'http://10.10.22.236:4000/mascots';

async function fetchMascots() {
  return fetch(MASCOTS_URL)
    .then((response) => response.json())
    .catch((err) => {
      console.log(err);
    });
}

const toggleFavourite = async (id) => {
  const res = await fetch(`${MASCOTS_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
  });
};

module.exports = {
  fetchMascots,
};
