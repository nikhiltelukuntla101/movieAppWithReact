import "./css/App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/home";
import Favourites from "./pages/favourites";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="main-content">
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
