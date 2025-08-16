import { useState } from "react";

function MovieCard({ movie }) {
  const [isFav, setIsFav] = useState(false);

  function onFavClick() {
    setIsFav(!isFav); // toggle favourite
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.url} alt={movie.title} />
        <div className="movie-overlay">
          <button className="favouriteBtn" onClick={onFavClick}>
            {isFav ? "❤️" : "🤍"}
          </button>
        </div>
      </div>

      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
