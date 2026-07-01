import { useEffect, useState } from "react";
import api from "../services/api";
import PizzaCard from "../components/PizzaCard";
import BebidaCard from "../components/BebidaCard";
import { Container, Row, Col, Button } from "react-bootstrap";

const Cardapio = () => {
  const [pizzas, setPizzas] = useState([]);
  const [bebidas, setBebidas] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todas");
  const [busca, setBusca] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [pizzasRes, bebidasRes] = await Promise.all([
          api.get("/pizzas"),
          api.get("/bebidas"),
        ]);

        setPizzas(pizzasRes.data);
        setBebidas(bebidasRes.data);
      } catch (error) {
        console.error("Erro ao buscar cardápio:", error);
      }
    };

    fetchData();
  }, []);

  const pizzasFiltradas =
    categoriaSelecionada === "Todas"
      ? pizzas
      : pizzas.filter(
          (pizza) => pizza.categoria === categoriaSelecionada
        );

  const resultadoBusca = pizzasFiltradas.filter((pizza) =>
    pizza.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <Container className="mt-4">
      <h1
        className="text-center text-white mb-4"
        style={{
          backgroundColor: "rgba(0,0,0,0.75)",
          padding: "15px",
          borderRadius: "12px",
          maxWidth: "500px",
          margin: "0 auto",
        }}
      >
        🍕 Cardápio
      </h1>

      <div className="d-flex justify-content-center mb-4">
        <input
          type="text"
          placeholder="Buscar pizza..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="form-control w-50"
        />
      </div>

      <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">
        {["Todas", "Tradicional", "Especial", "Doce"].map((cat) => (
          <Button
            key={cat}
            variant={categoriaSelecionada === cat ? "warning" : "dark"}
            onClick={() => setCategoriaSelecionada(cat)}
          >
            {cat === "Todas" ? "Todas" : cat + "s"}
          </Button>
        ))}
      </div>

      <Row>
        {resultadoBusca.map((pizza) => (
          <Col md={4} className="mb-4" key={pizza.id}>
            <PizzaCard pizza={pizza} />
          </Col>
        ))}
      </Row>

      <h2
        className="text-white text-center mt-5 mb-4"
        style={{
          backgroundColor: "rgba(0,0,0,0.75)",
          padding: "10px",
          borderRadius: "12px",
        }}
      >
        🥤 Bebidas
      </h2>

      <Row>
        {bebidas.map((bebida) => (
          <Col md={4} className="mb-4" key={bebida.id}>
            <BebidaCard bebida={bebida} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cardapio;