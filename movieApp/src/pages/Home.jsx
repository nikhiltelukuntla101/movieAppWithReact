import { useState } from "react";
import "../css/Home.css";
import MovieCard from "../components/MovieCard";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "Jumanji", release_date: 2019 },
    { id: 2, title: "Avengers Endgame", release_date: 2019 },
    { id: 3, title: "Ford V Ferrari", release_date: 2019 },
    { id: 4, title: "Terminator", release_date: 1996 },
    { id: 5, title: "Fantastic Four", release_date: 2019 },
  ];

  return (
    <div className="home">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(searchQuery);
        }}
        className="search-form"
      >
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          🔍 Search
        </button>
      </form>

      <div className="movie-grid">
        {movies
          .filter((movie) =>
            movie.title.toLowerCase().startsWith(searchQuery.toLowerCase())
          )
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
}

export default Home;
