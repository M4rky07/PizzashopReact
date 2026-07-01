import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const BebidaCard = ({ bebida }) => {
  return (
    <Card
      bg="dark"
      text="white"
      className="h-100 shadow border-0"
    >
      <Card.Img
        variant="top"
        src={bebida.imagem}
        style={{
          height: "220px",
          objectFit: "cover",
        }}
      />

      <Card.Body className="d-flex flex-column">
        <Card.Title className="fs-4 fw-bold">
          {bebida.nome}
        </Card.Title>

        <Card.Text>
          {bebida.descricao}
        </Card.Text>

        <Card.Text
          className="fw-bold fs-5 text-warning"
        >
          {bebida.preco.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </Card.Text>

        <div className="mt-auto">
          <Link to={`/bebida/${bebida.id}`}>
            <Button
              variant="warning"
              className="w-100 fw-bold"
            >
              Ver Detalhes 🥤
            </Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BebidaCard;