const MASCOTS_URL = 'http://10.10.22.135:4000/mascots';

async function fetchMascots() {
  return fetch(MASCOTS_URL)
    .then((response) => response.json())
    .catch((err) => {
      console.log(err);
    });
}

async function addMascot(mascot) {
  return fetch(MASCOTS_URL, {
    method: 'POST',
    body: JSON.stringify(mascot),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
}

async function toggleFavourites(mascotId, favouriteStatus) {
  const id = mascotId;
  return fetch(`${MASCOTS_URL}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(favouriteStatus),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

module.exports = {
  fetchMascots,
  addMascot,
  toggleFavourites,
};
