import About from "./pages/About"
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import Product from "./pages/Product"
import { Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <>
        <Routes>
          <Route path="/" exact={true} element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>      
    </>
  )
}

export default App