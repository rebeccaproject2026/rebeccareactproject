import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import "./ProductsPage.css";

const products = [
  {
      id: 1,
      name: "Roses",
      viewFileId: "1vN08Wbw6kCXmWhV_ZnjlVH0IKNQWVvRW", // Google Drive File ID for View
      viewFileUrl: "1vN08Wbw6kCXmWhV_ZnjlVH0IKNQWVvRW",
      downloadFileId: "1vN08Wbw6kCXmWhV_ZnjlVH0IKNQWVvRW", // Google Drive File ID for Download
      fileName: "Roses.pdf" // Name for downloaded file
  },
  {
      id: 2,
      name: "Morphology of flower",
      viewFileId: "11Htxup7igqH01Ut4H2jh7DMlsadX8sRk",
      downloadFileId: "11Htxup7igqH01Ut4H2jh7DMlsadX8sRk",
      fileName: "Morphologyofflower.pdf"
  },
  {
      id: 3,
      name: "Orchids",
      viewFileId: "1Hyd09rDy-8_BRXXSGtf_kcigvVFg7L1j",
      viewFileUrl: "1Hyd09rDy-8_BRXXSGtf_kcigvVFg7L1j",
      downloadFileId: "1Hyd09rDy-8_BRXXSGtf_kcigvVFg7L1j",
      fileName: "Orchids.pdf"
  }
];

const ProductsPage = () => {

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
