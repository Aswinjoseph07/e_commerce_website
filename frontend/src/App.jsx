import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart.jsx'
import Products from './pages/Products.jsx'
import Navbar from './components/Navbar.jsx'
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
