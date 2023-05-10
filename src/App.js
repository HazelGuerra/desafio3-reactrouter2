import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Router from "./components/router";
import Context from "./context";
import { useEffect, useState } from "react";

function App() {
  const [pokemones, setPokemones] = useState([]);
  const globaState = { pokemones, setPokemones };

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((response) => response.json())
      .then((data) => setPokemones(data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Context.Provider value={globaState}>
      <BrowserRouter>
        <Navbar />
        <Router />
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
