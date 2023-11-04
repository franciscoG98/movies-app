const OMDB_API = `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&t=`;

// http://www.omdbapi.com/?apikey=892169e3&t=batman
// http://www.omdbapi.com/?apikey=[yourkey]&
// http://img.omdbapi.com/?apikey=[yourkey]&


const GetMovies = async (inputSearch) => {
  try {
    const res = await fetch(OMDB_API + inputSearch);
    const data = await res.json(res);
    
    console.log('data', data);
  } catch (error) {
    throw new Error('Error: ', error);
  }
}

export default GetMovies;
