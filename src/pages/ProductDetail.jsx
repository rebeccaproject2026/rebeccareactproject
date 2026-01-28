import { useParams, Link } from "react-router-dom";
import farmImage from "../assets/images/Background/vegi.jpg";
import { productsData } from "./Comman";

const ProductDetail = () => {
  const { slug } = useParams();

  const findProductBySlug = (slugToFind) => {
    for (const category of productsData) {
      const variety = category.varieties.find((v) => v.slug === slugToFind);
      if (variety) return variety;
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
          <Link
            to="/products"
            className="bg-primary text-white px-6 py-3 rounded-full font-semibold"
          >
            Browse All Products
          </Link>
        </div>
      </div>
    );
  }

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) => (
      <i
        key={i}
        className={`fas fa-star ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      />
    ));

  const isFruit = () =>
    product.fruitColor ||
    product.fruitShape ||
    product.fruitWeight ||
    product.fruiteSize;

  const getDisplayValue = (value) => (value && value.trim() ? value : "-");

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <section className="relative h-[150px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${farmImage})` }}
        />
        <div className="absolute inset-0 bg-[#5a5a5a]/45"></div>

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <h1 className="text-2xl font-semibold text-white tracking-wider">
              {product.name}
            </h1>
          </div>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <img
              src={product.image}
              alt={product.name}
              className="rounded-lg h-full w-full"
            />

            {/* Details */}
            <div>
              <h2 className="text-2xl tracking-wide mb-4">
                {product.name} - {product.label}
              </h2>

              <div className="flex items-center mb-6">
                <div className="flex space-x-1 mr-3">
                  {renderStars(product.rating)}
                </div>
                <span className="text-gray-600">
                  ({product.reviews} Reviews)
                </span>
              </div>

              {/* SPEC GRID (FIXED ALIGNMENT) */}
              <div className="space-y-3  leading-relaxed">
                {[
                  ["Availability", product.availability],
                  [
                    isFruit() ? "Fruit Color" : "Flower Color",
                    isFruit() ? product.fruitColor : product.flowerColor,
                  ],
                  [
                    isFruit() ? "Fruit Shape" : "Flower Shape",
                    isFruit() ? product.fruitShape : product.flowerShape,
                  ],
                  [
                    isFruit() ? "Fruit Weight" : "Flower Weight",
                    isFruit() ? product.fruitWeight : product.flowerWeight,
                  ],
                  [
                    isFruit() ? "Fruit Size" : "Flower Size",
                    isFruit() ? product.fruiteSize : product.flowerSize,
                  ],
                  ["Plant Type", product.plantType],
                  ["Plant Habit", product.plantHabit],
                  ["Plant Height", product.plantHeight],
                  ["Maturity", product.maturity],
                  ["Yield", product.yield],
                  ["Additional Information", product.additionalInfo],
                ].map(([label, value], i) => (
                  <div
                    key={i}
                    className="grid grid-cols-[160px_1fr] items-start gap-2"
                  >
                    <span className="font-semibold text-gray-800">
                      {label}:
                    </span>
                    <span className="text-green-600">
                      {getDisplayValue(value)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
