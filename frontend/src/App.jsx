import Navbar from "./component/Navbar"
import Home from "./page/Home"
import Footer from "./component/Footer"
import ScrollTop from "./component/ScrollTop" //this one is a button
import ScrollToTop from "./component/ScrollToTop" //this one is for navigation
import ProductDetail from "./page/ProductDetail"
import SellerProfile from "./page/SellerProfile"
import AddEdit from "./page/AddEdit"

import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useState, useEffect } from "react"

function App() {
  const [showButton, setShowButton] = useState(false);

  const handleToTopClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.pageYOffset > 500);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.addEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <Router>
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<ProductDetail />}></Route>
        <Route path="/profile" element={<SellerProfile/>}></Route>
        <Route path="/add-edit" element={<AddEdit/>}></Route>
      </Routes>
      <ScrollTop showButton={showButton} handleToTopClick={handleToTopClick} />
      <Footer />
    </Router>
  )
}

export default App
