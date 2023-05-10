import { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import Context from "../../context";
import { useNavigate } from "react-router-dom";

export default () => {
  const navigate = useNavigate();
  const { name } = useParams();

  const { pokemones, setPokemones } = useContext(Context);

  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    const tuPokemon = pokemones.find((x) => x.name === name);
    fetch(tuPokemon.url)
      .then((response) => response.json())
      .then((data) => {
        const resultado = {
          sprite: data.sprites.front_default,
          stats: data.stats,
          name: tuPokemon.name,
        };
        setPokemon(resultado);
        console.log(resultado);
      })
      .catch((error) => console.log(error));
  }, [name]);

  return (
    <>
      {pokemon ? (
        <Row>
          <Col className="d-flex justify-content-center my-2">
            <img src={pokemon.sprite} alt={pokemon}></img>
          </Col>
          <Col className="my-5">
            <h1>{pokemon.name}</h1>
            <ul>
              {Array.isArray(pokemon.stats) &&
                pokemon.stats.map((stat, index) => (
                  <li key={index}>
                    {stat.stat.name}:{stat.base_stat}
                  </li>
                ))}
            </ul>
            <Button variant="primary" onClick={() => navigate("/")}>
              volver al home
            </Button>
          </Col>
        </Row>
      ) : (
        "loading"
      )}
    </>
  );
};
