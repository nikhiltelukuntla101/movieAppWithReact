const API_KEY = "5e239c5abd7a853edbe9fc24fa61896a";
const BASE_URL = "https://www.themoviedb.org/";

export const getPopularMovies = async () => {
  const respons = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await Response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const respons = await fetch(
    `${BASE_URL}/search/move?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await Response.json();
  return data.results;
};
