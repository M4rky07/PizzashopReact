import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CarrinhoProvider } from './context/CarrinhoContext.jsx'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar.jsx';

createRoot(document.getElementById('root')).render(
<CarrinhoProvider>
  <BrowserRouter>
    <StrictMode>
      <Navbar/>
        <App/>
    </StrictMode>
  </BrowserRouter>
</CarrinhoProvider>
)



