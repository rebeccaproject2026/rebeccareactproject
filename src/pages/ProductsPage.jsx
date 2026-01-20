import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import { products } from "../assets/data/products";
import Footer from "../components/Footer";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./ProductsPage.css";
import { useEffect } from "react";

const ProductsPage = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const scannedQuery = params.get("q");

  return (
    <div className="App">
      <Header />
      <Hero />

      <section className="products-section" id="products">
        <div className="container mt-4">
          <h2>Our Products</h2>
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProductsPage;
