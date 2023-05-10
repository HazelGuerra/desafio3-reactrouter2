import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./";

export default () => {
  const setActiveClass = ({ isActive }) =>
    isActive
      ? "active ms-3 text-decoration-none"
      : "ms-3 text-white text-decoration-none";
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Pokedex</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className={setActiveClass} to="/">
              Home
            </NavLink>
            <NavLink className={setActiveClass} to="/form">
              Pokemones
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
