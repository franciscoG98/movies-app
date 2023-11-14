import { useState, useEffect } from "react";
import Form from "./components/Form/Form";
import GetMovies from "./services/GetMovies";
import MovieList from "./components/List/MovieList";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    GetMovies('shameless').then((data) => setMovies(data));
  }, []);

  const handleSearchSubmit = (searchValue) => {
    GetMovies(searchValue).then((data) => setMovies(data));
  };

  return (
    <main className="main__layout">
      <h1 className="app__title">movies-app</h1>

      <Form onSubmit={handleSearchSubmit} />

      <MovieList content={movies} />
    </main>
  );
};

export default App;
