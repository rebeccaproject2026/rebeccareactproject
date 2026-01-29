import { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { fetchDriveFiles } from "../services/driveService";
import "./ProductsPage.css";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const driveFiles = await fetchDriveFiles();
        setProducts(driveFiles);
      } catch (err) {
        console.error("Failed to load products", err);
        setError("Failed to load products from Google Drive.");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <section className="products-section" id="products">
        <div className="container mt-4">
          <h2>Our Products</h2>

          {loading && (
            <div className="text-center py-10">
              <p className="text-xl text-gray-600">Loading products...</p>
            </div>
          )}

          {error && (
            <div className="text-center py-10">
              <p className="text-red-500">{error}</p>
              <p className="text-sm text-gray-500 mt-2">Please check your internet connection or API configuration.</p>
            </div>
          )}

          {!loading && !error && products.length === 0 && (
            <div className="text-center py-10">
              <p className="text-xl text-gray-600">No products found.</p>
              <p className="text-sm text-gray-500 mt-2">Make sure you have added files to the configured Google Drive folder.</p>
            </div>
          )}

          {!loading && !error && products.length > 0 && (
            <div className="products-grid">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProductsPage;
