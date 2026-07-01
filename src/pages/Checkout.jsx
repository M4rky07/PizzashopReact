import { useState, useContext } from "react";
import { CarrinhoContext } from "../context/CarrinhoContext";
import { Container,Card,Form,Button,ListGroup,} from "react-bootstrap";

const Checkout = () => {
const { carrinho, limparCarrinho } = useContext(CarrinhoContext);
const [nome, setNome] = useState("");
const [telefone, setTelefone] = useState("");
const [endereco, setEndereco] = useState("");
const [pagamento, setPagamento] = useState("");
const [troco, setTroco] = useState("");

const finalizarPedido = () => {

  const itensPedido = carrinho.map((item)=> `${item.quantidade}x ${item.nome}`).join("\n");

  const total = carrinho.reduce((total, itensPedido) => {
  return total + itensPedido.preco * itensPedido.quantidade;
}, 0);

if (!nome.trim() || !telefone.trim() || !endereco.trim() || !pagamento.trim()) {
  alert("Preencha todos os campos");
  return;
}
if (carrinho.length === 0) {
  alert("Seu carrinho está vazio");
  return;
}

if (telefone.length !== 11) {
  alert("Digite um telefone com DDD");
  return;
}

const infoTroco =
  pagamento === "Dinheiro"
    ? troco
      ? `Troco para: R$ ${troco}`
      : "Não precisa de troco"
    : "";


console.log(pagamento);


const mensagem = `

🍕 Pedido

Cliente: ${nome}

Telefone: ${telefone}

Endereço: ${endereco}

Pagamento: ${pagamento}

${infoTroco}

Itens:
${itensPedido}

Total: ${total.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL",
})}
`;
  console.log(itensPedido);
  const mensagemCodificada = encodeURIComponent(mensagem);
  const telfonePizzaria = import.meta.env.VITE_WHATSAPP_NUMBER;
  const url = `https://wa.me/${telfonePizzaria}?text=${mensagemCodificada}`;
  window.open(url, "_blank");
  limparCarrinho();

}

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
      🍕 Finalizar Pedido
    </h1>

    <Card bg="dark" text="white" className="shadow border-0">
      <Card.Body>
        <Card.Title className="mb-3">
          Resumo do Pedido
        </Card.Title>

        <ListGroup variant="flush">
          {carrinho.map((item) => (
            <ListGroup.Item
              key={`${item.tipo}-${item.id}`}
              className="bg-dark text-white border-secondary"
            >
              {item.quantidade}x {item.nome}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>

    <Card
      bg="dark"
      text="white"
      className="mt-4 shadow border-0"
    >
      <Card.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite seu nome"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Telefone</Form.Label>
            <Form.Control
              type="text"
              value={telefone}
              onChange={(e) =>
                setTelefone(
                  e.target.value.replace(/\D/g, "")
                )
              }
              placeholder="83999999999"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Endereço</Form.Label>
            <Form.Control
              type="text"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
              placeholder="Rua, número, bairro..."
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>
              Forma de Pagamento
            </Form.Label>

            <Form.Check
              type="radio"
              label="Pix"
              value="Pix"
              checked={pagamento === "Pix"}
              onChange={(e) =>
                setPagamento(e.target.value)
              }
            />

            <Form.Check
              type="radio"
              label="Dinheiro"
              value="Dinheiro"
              checked={pagamento === "Dinheiro"}
              onChange={(e) =>
                setPagamento(e.target.value)
              }
            />

            <Form.Check
              type="radio"
              label="Cartão"
              value="Cartão"
              checked={pagamento === "Cartão"}
              onChange={(e) =>
                setPagamento(e.target.value)
              }
            />
          </Form.Group>

          {pagamento === "Dinheiro" && (
            <Form.Group className="mb-4">
              <Form.Label>
                Troco para (opcional)
              </Form.Label>

              <Form.Control
                type="text"
                value={troco}
                onChange={(e) =>
                  setTroco(e.target.value)
                }
                placeholder="Ex: 100"
              />
            </Form.Group>
          )}

          <div className="d-grid">
            <Button
              variant="success"
              size="lg"
              onClick={finalizarPedido}
            >
              Enviar Pedido no WhatsApp 📱
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  </Container>
);


 
}

export default Checkout