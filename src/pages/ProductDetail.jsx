import { useParams, Link } from "react-router-dom";
import farmImage from "../assets/images/Background/farm3.jpg";
import { productsData } from "./Comman";

const ProductDetail = () => {
  const { slug } = useParams();

  // Find product by searching through all categories and varieties
  const findProductBySlug = (slugToFind) => {
    for (const category of productsData) {
      const variety = category.varieties.find((v) => v.slug === slugToFind);
      if (variety) {
        return variety;
      }
    }
    return null;
  };

  const product =
    findProductBySlug(slug) ||
    findProductBySlug("zella-yellow") ||
    productsData[0]?.varieties[0];

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The product you're looking for doesn't exist.
          </p>
          <Link
            to="/products"
            className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors inline-block"
          >
            Browse All Products
          </Link>
        </div>
      </div>
    );
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={`fas fa-star ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <section className="relative h-[150px] sm:h-[180px] overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover bg-fixed sm:bg-fixed"
          style={{
            backgroundImage: `url(${farmImage})`,
          }}
        ></div>

        {/* Glass overlay ONLY in this area */}
        <div className="absolute inset-0 bg-[#5a5a5a]/45"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[6rem]">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white tracking-wider">
                {product.name}
              </h1>

              <nav className="text-white text-sm sm:text-base">
                <nav className="text-white mt-4 md:mt-0">
                  <Link
                    to="/"
                    className="hover:text-gray-300 transition-colors"
                  >
                    Home
                  </Link>
                  <span className="mx-2">•</span>
                  <Link
                    to="/products"
                    className="hover:text-gray-300 transition-colors"
                  >
                    Products
                  </Link>
                  <span className="mx-2">•</span>
                  <span className="text-gray-300 text-xs sm:text-sm md:text-base truncate max-w-[150px] sm:max-w-none">
                    {product.name}
                  </span>
                </nav>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[6rem]">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
              {/* Product Image */}
              <div className="flex justify-center">
                <div className="w-full max-w-md">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto object-cover rounded-lg"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      e.target.style.display = "none";
                    }}
                  />
                </div>
              </div>

              {/* Product Information */}
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h2 className="text-xl sm:text-2xl tracking-wider text-gray-800 mb-3 sm:mb-4">
                    {product.name}
                  </h2>

                  {/* Rating */}
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="flex space-x-1 mr-3">
                      {renderStars(product.rating)}
                    </div>
                    <span className="text-sm sm:text-base text-gray-600">
                      ({product.reviews} Reviews)
                    </span>
                  </div>
                </div>

                {/* Product Specifications */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-1 gap-3 leading-relaxed sm:leading-[1.75rem]">
                    <div className="flex flex-col sm:flex-row">
                      <span className="font-semibold text-gray-800 w-full sm:w-40 mb-1 sm:mb-0">
                        Availability:
                      </span>
                      <span className="text-green-600 font-medium">
                        {product.availability}
                      </span>
                    </div>

                    {(product.flowerColor || product.fruitColor) && (
                      <div className="flex flex-col sm:flex-row">
                        <span className="font-semibold text-gray-800 w-full sm:w-40 mb-1 sm:mb-0">
                          {product.flowerColor
                            ? "Flower Color:"
                            : "Fruit Color:"}
                        </span>
                        <span className="text-green-600">
                          {product.flowerColor || product.fruitColor}
                        </span>
                      </div>
                    )}

                    {(product.flowerShape || product.fruitShape) && (
                      <div className="flex flex-col sm:flex-row">
                        <span className="font-semibold text-gray-800 w-full sm:w-40 mb-1 sm:mb-0">
                          {product.flowerShape
                            ? "Flower Shape:"
                            : "Fruit Shape:"}
                        </span>
                        <span className="text-green-600">
                          {product.flowerShape || product.fruitShape}
                        </span>
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row">
                      <span className="font-semibold text-gray-800 w-full sm:w-40 mb-1 sm:mb-0">
                        Plant Height:
                      </span>
                      <span className="text-green-600">
                        {product.plantHeight}
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row">
                      <span className="font-semibold text-gray-800 w-full sm:w-40 mb-1 sm:mb-0">
                        Maturity:
                      </span>
                      <span className="text-green-600">{product.maturity}</span>
                    </div>

                    <div className="flex flex-col sm:flex-row">
                      <span className="font-semibold text-gray-800 w-full sm:w-40 mb-1 sm:mb-0">
                        Additional Information:
                      </span>
                      <span className="text-green-600 text-sm sm:text-base">
                        {product.additionalInfo}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
