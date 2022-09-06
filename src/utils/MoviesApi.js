const moviesUrl = 'https://api.nomoreparties.co/beatfilm-movies';

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return res.json().then((data) => {
      throw new Error(data.message);
    });
  }
}

export function getAllMovies() {
  return fetch(moviesUrl, {
    method: 'GET',
  }).then((res) => checkResponse(res));
}
