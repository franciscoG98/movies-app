const OMDB_API = `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=`;

const GetMovies = (inputSearch) => {

  const res = fetch(OMDB_API + inputSearch)
    .then(res => res.json())
    .then(data => data.Search)
    .catch(err => console.log('Error: ', err))

  return res
}

export default GetMovies;
