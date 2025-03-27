import React, { useState, useEffect } from 'react';
import './home.css';

function Home() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [results, setResults] = useState([]);

  // Fetch movies from the backend
  useEffect(() => {
    fetch('http://localhost:3001/movies')
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        setResults(data); // Initialize results with all movies
      })
      .catch((err) => console.error('Error fetching movies:', err));
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value;
    setQuery(value);

    if (value) {
      const filteredResults = movies.filter((movie) =>
        movie.title.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults(movies); // Reset to all movies if the search query is empty
    }
  };

  return (
    <div>
      <h1>Home Page!</h1>
      <p>Welcome to the Movie Database!</p>
      <p>Explore our collection of movies and find your favorites.</p>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search for a movie..."
      />
      <div>
        <h2>Search Results:</h2>
        <ul>
          {results.map((movie) => (
            <li key={movie.id}>
              Movie ID: {movie.id}, Title: {movie.title}
            </li>
          ))}
        </ul>
        {results.length === 0 && <p>No movies found.</p>}
      </div>
    </div>
  );
}

export default Home;