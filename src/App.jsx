import './App.css'
import Form from './components/Form/Form'
import GetMovies from './services/GetMovies'

const App = () => {

  const handleSearchSubmit = (searchValue) => {
    console.log("Valor de búsqueda:", searchValue);

    GetMovies(searchValue);
  };

  return (
    <main>
      <h1>movies-app</h1>
      <h2>Find your favorites series and movies</h2>

      <section>
        <Form onSubmit={handleSearchSubmit} />
        {/* list */}
      </section>

      {/* {
        console.log('hola apikey', import.meta.env.VITE_API_KEY)
      } */}

    </main>
  )
}

export default App
