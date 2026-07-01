import { Link } from "react-router-dom";
import { useContext } from "react";
import { CarrinhoContext } from "../context/CarrinhoContext";
import { Navbar as BootstrapNavbar,Container,Nav,Badge,} from "react-bootstrap";

function Navbar() {
  const { carrinho } = useContext(CarrinhoContext);

  const quantidadeItens = carrinho.reduce(
    (total, item) => total + item.quantidade,
    0
  );

  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/">
          🍕 Pizzaria
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle aria-controls="navbar-nav" />

        <BootstrapNavbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/cardapio">
              Cardápio
            </Nav.Link>

            <Nav.Link as={Link} to="/admin">
              Admin
            </Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link as={Link} to="/carrinho">
              🛒 Carrinho
              <Badge bg="danger" className="ms-2">
                {quantidadeItens}
              </Badge>
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;