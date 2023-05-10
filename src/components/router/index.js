import { Route, Routes } from "react-router-dom";

import Home from "../home";
import Contacto from "../Contacto";
import Personaje from "../personaje";

export default () => {
  return (
    <Routes>
      <Route path="/form" element={<Home />} />
      <Route path="/" element={<Contacto />} />
      <Route path="/personaje/:name" element={<Personaje />} />
    </Routes>
  );
};
