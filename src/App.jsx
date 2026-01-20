import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";
import LandingPage from "./pages/LandingPage";
import ProductsPage from "./pages/ProductsPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/qr" element={<LandingPage />} />
        </Route>

        <Route path="/downloads" element={<ProductsPage />} />
      </Routes>
    </Router>
  );
}
export default App;
