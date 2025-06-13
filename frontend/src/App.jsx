import Navbar from "./component/Navbar"
import Home from "./page/Home"
import Footer from "./component/Footer"
import ProductDetail from "./page/ProductDetail"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<ProductDetail/>}></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
