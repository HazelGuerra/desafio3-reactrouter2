import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useContext } from "react";
import Context from "../../context";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import "./index.css";

export default () => {
  const { pokemones, setPokemones } = useContext(Context);

  const [pokemon, setPokemon] = useState({});

  const navigate = useNavigate();

  function handleSelectChange(name) {
    const tuPokemon = pokemones.find((x) => x.name === name);
    setPokemon(tuPokemon);
  }

  const goToCharacter = (name) => {
    navigate(`/personaje/${name}`);
  };

  return (
    <div className="home-class">
      <Container>
        <h1> Elige tu pokemon</h1>
        <Form.Select
          className="my-1"
          aria-label="Default select example"
          onChange={(e) => handleSelectChange(e.target.value)}
        >
          <option>selecciona el personaje</option>
          {pokemones
            ? pokemones.map((pokemon) => (
                <option value={pokemon.name}>{pokemon.name}</option>
              ))
            : "loading"}
        </Form.Select>
        <Button
          className="ms-3"
          variant="dark"
          onClick={() => goToCharacter(pokemon.name)}
        >
          ver detalle
        </Button>
      </Container>
    </div>
  );
};
