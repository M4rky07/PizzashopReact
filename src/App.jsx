import { Routes, Route } from "react-router-dom"


import Home from './pages/Home'
import Cardapio from './pages/Cardapio'
import Carrinho from "./pages/Carrinho"
import Checkout from './pages/Checkout'
import Pedido from './pages/Pedido'
import Admin from './pages/Admin'
import PizzaDetalhes from "./pages/PizzaDetalhes"
import BebidasDetalhes from "./pages/BebidasDetalhes"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cardapio" element={<Cardapio />} />
      <Route path="/carrinho" element={<Carrinho />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/pedido" element={<Pedido />} />
      <Route path="/admin" element={<Admin />} />  
      <Route path="/pizza/:id" element={<PizzaDetalhes/>}/>
      <Route path="/bebida/:id" element={<BebidasDetalhes/>}/>
    </Routes>
  )
}

export default App