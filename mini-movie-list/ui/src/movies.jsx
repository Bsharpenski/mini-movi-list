import { useEffect, useState } from 'react';
import './home.css';

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/movies')
    .then(res => res.json())
    .then(res2 => {
      setMovies(res2);
      console.log(res2);
    })
}, []);

  return (
    <div>
      <h1>Movies Page!</h1>
      <p>Welcome to the Movie Database!</p>
      <p>Explore our collection of movies and find your favorites.</p>

      <h2>Movie List:</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            Movie ID: {movie.id}, Title: {movie.title}
          </li>
        ))}
      </ul>
      <div>
        {movies.length === 0 && <p>No movies found.</p>}
      </div>
    </div>
  );
}

export default Movies;