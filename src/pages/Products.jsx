import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { allProducts } from "./Comman";
import farmImage from "../assets/images/Background/farm3.jpg";

const Products = () => {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", name: "All Products", count: allProducts.length },
    {
      id: "vegetables",
      name: "Vegetables",
      count: allProducts.filter((p) => p.category === "vegetables").length,
    },
    {
      id: "flowers",
      name: "Flowers",
      count: allProducts.filter((p) => p.category === "flowers").length,
    },
    {
      id: "fruits",
      name: "Fruits",
      count: allProducts.filter((p) => p.category === "fruits").length,
    },
  ];

  const filteredProducts =
    filter === "all"
      ? allProducts
      : allProducts.filter((product) => product.category === filter);

  return (
    <div>
      <section className="relative h-[150px] sm:h-[180px] overflow-hidden">
        {/* Background image ONLY for this section */}
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
                All Products
              </h1>

              <nav className="text-white text-sm sm:text-base">
                <Link to="/" className="hover:text-gray-200">
                  Home
                </Link>
                <span className="mx-2">•</span>
                <span className="text-gray-300">All Products</span>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-10 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Our Premium Products
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto px-4">
              We offer a comprehensive range of quality seeds including sourcing
              of quality suppliers, managing entire supply chain of import and
              exports including logistics, customs clearance.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-xs sm:text-sm md:text-base ${
                  filter === category.id
                    ? "bg-primary text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </motion.div> 

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: index * 0.02 }}
                className="card group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image.image}
                    alt={product.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjNENBRjUwIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4ke3Byb2R1Y3QubmFtZX08L3RleHQ+Cjwvc3ZnPg==`;
                    }}
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link
                      to={`/product/${product.slug}`}
                      className="bg-white text-primary px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        product.category === "vegetables"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {product.category === "vegetables"
                        ? "Vegetable"
                        : product.category === "fruits"
                        ? "Fruits"
                        : "Flower"}
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800 group-hover:text-primary transition-colors">
                    {product.name} - {product.label}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                    {product.features.slice(0, 2).map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/product/${product.slug}`}
                    className="text-primary font-medium hover:text-primary/80 transition-colors text-xs sm:text-sm"
                  >
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Products Message */}
          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <i className="fas fa-seedling text-6xl text-gray-300 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No products found
              </h3>
              <p className="text-gray-500">
                Try selecting a different category
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Green CTA Section */}
      <section className="py-6 sm:py-8 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[6rem]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-white text-base sm:text-lg font-medium">
                Please feel free to write us your valuable suggestions
              </p>
            </div>

            <div>
              <Link
                to="/contact-us"
                className="bg-white text-primary px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block text-sm sm:text-base"
              >
                GET IN TOUCH
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
