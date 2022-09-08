// export const baseUrl = 'https://api.findmovies.nomoredomains.xyz';
export const baseUrl = 'http://localhost:4000';

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return res.json().then((data) => {
      throw new Error(data.message);
    });
  }
}

export function register(name, email, password) {
  console.log(name, email, password);
  return fetch(`${baseUrl}/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
  }).then((res) => checkResponse(res));
}

export function login(email, password) {
  return fetch(`${baseUrl}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  }).then((res) => checkResponse(res));
}

export function logout(email) {
  return fetch(`${baseUrl}/signout`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  }).then((res) => checkResponse(res));
}

export function getUser() {
  return fetch(`${baseUrl}/users/me`, {
    method: 'GET',
    credentials: 'include',
  }).then((res) => checkResponse(res));
}

export function updateUser(name, email) {
  return fetch(`${baseUrl}/users/me`, {
    method: 'PATCH',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email }),
  }).then((res) => checkResponse(res));
}

export function getMovies() {
  return fetch(`${baseUrl}/movies`, {
    method: 'GET',
    credentials: 'include',
  }).then((res) => checkResponse(res));
}

export function addMovie({
  country,
  director,
  duration,
  year,
  description,
  image,
  trailerLink,
  thumbnail,
  movieId,
  nameRU,
  nameEN,
}) {
  return fetch(`${baseUrl}/movies`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      thumbnail,
      movieId,
      nameRU,
      nameEN,
    }),
  }).then((res) => checkResponse(res));
}

export function removeMovie({ id }) {
  return fetch(`${baseUrl}/movies/${id}`, {
    method: 'DELETE',
    credentials: 'include',
  }).then((res) => checkResponse(res));
}
