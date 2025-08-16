import viteLogo from "/vite.svg";
import "./App.css";
import MovieCard from "./components/MovieCard";

function App() {
  const movieNumber = 1;

  return (
    <>
      {movieNumber == 1 ? (
        <MovieCard movie={{ title: "War2", release_date: 2025 }}></MovieCard>
      ) : (
        <MovieCard movie={{ title: "Coolie", release_date: 2025 }}></MovieCard>
      )}
    </>
  );
}

export default App;
