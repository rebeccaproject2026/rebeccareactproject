import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { allSliderProducts } from "../pages/Comman";

const ProductSlider = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    variableWidth: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: false,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false,
          swipeToSlide: false,
          arrows: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false,
          swipeToSlide: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="py-10 sm:py-16 lg:py-20 bg-[#f5f5f5]">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[5rem]">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-4 sm:mb-6 title down-line"
          >
            Top Products
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4"
          >
            Quality seeds for flowers, vegetables, and fruits you can trust.
          </motion.p>
        </div>

        {/* Slider */}
        <div className="product-slider-wrapper pb-8">
          <Slider {...settings}>
            {allSliderProducts.map((product) => (
              <div key={product.id} className="px-2 sm:px-3 h-full">
                <div className="bg-white overflow-hidden shadow cursor-pointer max-w-[320px] mx-auto w-full h-full flex flex-col">
                  {/* Image Wrapper for Padding */}
                  <div className="p-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      draggable={false}
                      className="w-full h-48 sm:h-56 object-cover"
                    />
                  </div>

                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-center flex flex-col flex-1">
                    <h3
                      onClick={() => navigate(`/product/${product.slug}`)}
                      className="text-base sm:text-lg mb-2 text-gray-800 hover:text-primary transition-colors duration-300 cursor-pointer"
                    >
                      {product.name} - {product.label}
                    </h3>

                    <div className="w-10 h-1 bg-primary mx-auto mb-2 sm:mb-3"></div>

                    <p className="text-gray-600 text-xs sm:text-sm flex-1">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
