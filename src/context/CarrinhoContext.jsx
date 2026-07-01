import { createContext, useState, useEffect } from "react";

export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState(
    JSON.parse(localStorage.getItem("carrinho")) || []
  );

  useEffect(() => {
    localStorage.setItem(
      "carrinho",
      JSON.stringify(carrinho)
    );
  }, [carrinho]);

  const adicionarAoCarrinho = (produto) => {
    const findItem = carrinho.find(
      (item) =>
        item.id === produto.id &&
        item.tipo === produto.tipo
    );

    if (findItem) {
      const novoCarrinho = carrinho.map((item) => {
        if (
          item.id === produto.id &&
          item.tipo === produto.tipo
        ) {
          return {
            ...item,
            quantidade: item.quantidade + 1,
          };
        }

        return item;
      });

      setCarrinho(novoCarrinho);
    } else {
      setCarrinho([
        ...carrinho,
        {
          ...produto,
          quantidade: 1,
        },
      ]);
    }
  };

  const removerDoCarrinho = (id, tipo) => {
    const itemExistente = carrinho.find(
      (item) =>
        item.id === id &&
        item.tipo === tipo
    );

    if (!itemExistente) return;

    if (itemExistente.quantidade > 1) {
      const novoCarrinho = carrinho.map((item) => {
        if (
          item.id === id &&
          item.tipo === tipo
        ) {
          return {
            ...item,
            quantidade: item.quantidade - 1,
          };
        }

        return item;
      });

      setCarrinho(novoCarrinho);
    } else {
      const novoCarrinho = carrinho.filter(
        (item) =>
          !(
            item.id === id &&
            item.tipo === tipo
          )
      );

      setCarrinho(novoCarrinho);
    }
  };

  const limparCarrinho = () => {
    setCarrinho([]);
  };

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        adicionarAoCarrinho,
        removerDoCarrinho,
        limparCarrinho,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};