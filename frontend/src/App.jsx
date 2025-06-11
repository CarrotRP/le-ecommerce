import Navbar from "./component/Navbar"
import Home from "./content/Home"
import Footer from "./component/Footer"
import ProductDetail from "./page/ProductDetail"
import Cart from "./page/Cart"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<ProductDetail/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
