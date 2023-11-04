const OMDB_API = `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=`;

const GetMovies = async (inputSearch) => {
  try {
    const res = await fetch(OMDB_API + inputSearch);
    const data = await res.json(res);

    return data.Search;
  } catch (error) {
    throw new Error('Error: ', error);
  }
}

export default GetMovies;
