import { useContext } from "react";
import { CarrinhoContext } from "../context/CarrinhoContext";
import { Link } from "react-router-dom";
import {Container,Card,Button} from "react-bootstrap";

const Carrinho = () => {
  const {
  carrinho,
  removerDoCarrinho,
  adicionarAoCarrinho
} = useContext(CarrinhoContext);

  const total = carrinho.reduce((total, item )=>{
    return total + item.preco * item.quantidade;
  }, 0);

 return (
  <Container className="mt-4">
    <h1
      className="text-center text-white"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        padding: "15px",
        borderRadius: "12px",
        maxWidth: "500px",
        margin: "20px auto 30px auto",
        boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
      }}
    >
      🛒 Meu Carrinho
    </h1>

    {carrinho.map((item) => (
      <Card
        key={item.id}
        className="mb-3 shadow border-0"
        bg="dark"
        text="white"
      >
        <Card.Body>
          <Card.Title className="fs-3">
            {item.nome}
          </Card.Title>

          <div className="d-flex align-items-center gap-2 mb-3">
            <Button
              variant="danger"
              onClick={() => removerDoCarrinho(item.id, item.tipo)}
            >
              -
            </Button>

            <span className="fw-bold fs-4">
              {item.quantidade}
            </span>

            <Button
              variant="success"
              onClick={() => adicionarAoCarrinho(item)}
            >
              +
            </Button>
          </div>

          <Card.Text className="fs-5">
            <strong>Preço unitário:</strong>{" "}
            {item.preco.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </Card.Text>

          <Card.Text className="fs-5">
            <strong>Subtotal:</strong>{" "}
            {(item.preco * item.quantidade).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </Card.Text>
        </Card.Body>
      </Card>
    ))}

    <Card
      className="mt-4 shadow border-0"
      bg="warning"
      text="dark"
    >
      <Card.Body className="text-center">
        <h2 className="fw-bold">
          Total:{" "}
          {total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </h2>

        <Link to="/checkout">
          <Button
            variant="success"
            size="lg"
            className="mt-3 px-4"
          >
            Finalizar Pedido 🍕
          </Button>
        </Link>
      </Card.Body>
    </Card>
  </Container>
);
 
};

export default Carrinho;