import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import "./ProductsPage.css";

const products = [
  {
    id: 1,
    name: "Beet",
    viewFileId: "1AmPjbXylV8yYyEwna23Bih1oNL-fVaDA", // Google Drive File ID for
    viewFileUrl: "1AmPjbXylV8yYyEwna23Bih1oNL-fVaDA",
    downloadFileId: "1AmPjbXylV8yYyEwna23Bih1oNL-fVaDA", // Google Drive File ID for Download
    fileName: "Beet.pdf", // Name for downloaded file
  },
  {
    id: 2,
    name: "Bitter Gourd",
    viewFileId: "1ObNaYO20r1MqSwEUHumiNwoTRM7pMa-L",
    downloadFileId: "1ObNaYO20r1MqSwEUHumiNwoTRM7pMa-L",
    fileName: "BitterGourd.pdf",
  },
  {
    id: 3,
    name: "Bottle Gourd",
    viewFileId: "10mfK9I6bD8_EClnV3q4cyxOtuFNYX7Ij/",
    viewFileUrl: "10mfK9I6bD8_EClnV3q4cyxOtuFNYX7Ij/",
    downloadFileId: "10mfK9I6bD8_EClnV3q4cyxOtuFNYX7Ij/",
    fileName: "BottleGourd.pdf",
  },
  {
    id: 4,
    name: "Chilli",
    viewFileId: "1VUl37Iv-9gRPvFazDJq78exW4Bfpj_ld",
    viewFileUrl: "1VUl37Iv-9gRPvFazDJq78exW4Bfpj_ld",
    downloadFileId: "1VUl37Iv-9gRPvFazDJq78exW4Bfpj_ld",
    fileName: "Chilli.pdf",
  },
  {
    id: 5,
    name: "Coriander",
    viewFileId: "1XU42mPOI4v-cMhw0v71NG6_GGQs0V6s0",
    viewFileUrl: "1XU42mPOI4v-cMhw0v71NG6_GGQs0V6s0",
    downloadFileId: "1XU42mPOI4v-cMhw0v71NG6_GGQs0V6s0",
    fileName: "Coriander.pdf",
  },
  {
    id: 6,
    name: "Cucumber",
    viewFileId: "1P2Ap-gZ7aigvr8aCsvd7b9eHCKsqkrp-",
    viewFileUrl: "1P2Ap-gZ7aigvr8aCsvd7b9eHCKsqkrp-",
    downloadFileId: "1P2Ap-gZ7aigvr8aCsvd7b9eHCKsqkrp-",
    fileName: "Cucumber.pdf",
  },
  {
    id: 7,
    name: "Marigold",
    viewFileId: "1l5uECh0oKDROmQyhDCGKDAwR6glxZAeI",
    viewFileUrl: "1l5uECh0oKDROmQyhDCGKDAwR6glxZAeI",
    downloadFileId: "1l5uECh0oKDROmQyhDCGKDAwR6glxZAeI",
    fileName: "Marigold.pdf",
  },
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
