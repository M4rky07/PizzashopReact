import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { CarrinhoContext } from "../context/CarrinhoContext.jsx";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
} from "react-bootstrap";
import api from "../services/api";

const PizzaDetalhes = () => {
  const { id } = useParams();

  const { adicionarAoCarrinho } = useContext(CarrinhoContext);

  const [pizza, setPizza] = useState({});

  useEffect(() => {
    api.get(`/pizzas/${id}`).then((response) => {
      setPizza(response.data);
    });
  }, [id]);

  return (
    <Container className="mt-4">
      <Card
        bg="dark"
        text="white"
        className="shadow border-0"
      >
        <Row className="g-0">

          <Col md={6}>
            <Card.Img
              src={pizza.imagem}
              alt={pizza.nome}
              style={{
                height: "100%",
                minHeight: "400px",
                objectFit: "cover",
              }}
            />
          </Col>

          <Col md={6}>
            <Card.Body className="p-4">

              <Badge
                bg="warning"
                text="dark"
                className="mb-3 fs-6"
              >
                🍕 Pizza Especial
              </Badge>

              <Card.Title className="display-5 fw-bold">
                {pizza.nome}
              </Card.Title>

              <Card.Text
                className="mt-3"
                style={{ fontSize: "1.1rem" }}
              >
                {pizza.descricao}
              </Card.Text>

              <h2 className="text-warning fw-bold mt-4">
                {pizza.preco?.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </h2>

              <div className="d-grid mt-4">
                <Button
                  variant="success"
                  size="lg"
                  onClick={() =>
                    adicionarAoCarrinho(pizza)
                  }
                >
                  🛒 Adicionar ao Carrinho
                </Button>
              </div>

            </Card.Body>
          </Col>

        </Row>
      </Card>
    </Container>
  );
};

export default PizzaDetalhes;