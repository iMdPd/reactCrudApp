import { NavLink } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

export const Navigation = () => {
  return (
    <>
      <Navbar
        bg="primary"
        variant="dark"
        expand="lg"
        className="mt-4 mb-4 rounded"
      >
        <Container fluid>
          <Navbar.Brand as={NavLink} to="/">
            CrudApp
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="justify-content-end flex-grow-1 my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
