import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container className="mt-5">

      <div
        className="text-center text-white"
        style={{
          backgroundColor: "rgba(0,0,0,0.75)",
          padding: "40px",
          borderRadius: "15px",
          marginBottom: "40px",
        }}
      >
        <h1 className="display-3 fw-bold">
          🍕 Pizzaria Ratatouille
        </h1>

        <p className="lead mt-3">
          As melhores pizzas da cidade entregues quentinhas
          na sua casa.
        </p>

        <Link to="/cardapio">
          <Button
            variant="warning"
            size="lg"
            className="mt-3"
          >
            Ver Cardápio 🍕
          </Button>
        </Link>
      </div>

      <Row className="g-4">

        <Col md={4}>
          <Card
            bg="dark"
            text="white"
            className="h-100 shadow"
          >
            <Card.Body className="text-center">
              <h1>🚚</h1>

              <Card.Title>
                Entrega Rápida
              </Card.Title>

              <Card.Text>
                Receba seu pedido com rapidez e segurança.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card
            bg="dark"
            text="white"
            className="h-100 shadow"
          >
            <Card.Body className="text-center">
              <h1>🔥</h1>

              <Card.Title>
                Ingredientes Frescos
              </Card.Title>

              <Card.Text>
                Pizzas preparadas com ingredientes selecionados.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card
            bg="dark"
            text="white"
            className="h-100 shadow"
          >
            <Card.Body className="text-center">
              <h1>⭐</h1>

              <Card.Title>
                Qualidade Garantida
              </Card.Title>

              <Card.Text>
                Sabor e atendimento que conquistam nossos clientes.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

      </Row>

    </Container>
  );
};

export default Home;