import Container from "react-bootstrap/Container";
import CartWidget from "./CartWidget";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getCategories } from "../mock/AsyncMock";

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(getCategories());
  }, []);

  return (
    <Navbar expand="lg" className="navbar-custom shadow-sm py-3">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="brand-logo">
          <img
            src="/kiri.png"
            height="40"
            className="d-inline-block align-top img brand-image"
            alt="Kiri Makeup"
            title="Kiri Makeup"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="border-0" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0 nav-links"
            navbarScroll
          >
            <Nav.Link as={NavLink} to="/" className="mx-2 nav-item">Inicio</Nav.Link>
            <NavDropdown title="Productos" id="navbarScrollingDropdown" className="mx-2 nav-item">
              {categories.map((category) => (
                <NavDropdown.Item
                  key={category}
                  as={NavLink}
                  to={`/category/${category}`}
                  className="dropdown-item-custom"
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </NavDropdown.Item>
              ))}
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/category/ofertas" className="dropdown-item-custom special-offer">
                Ofertas
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/contact" className="mx-2 nav-item">Contacto</Nav.Link>
          </Nav>

          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/cart" className="cart-icon-container">
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
