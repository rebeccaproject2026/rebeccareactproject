import { useState } from "react";
import { motion } from "framer-motion";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

// Background images
import bg1 from "../assets/images/Background/vegi.jpg";
import bg2 from "../assets/images/Background/flower12.jpg";
import bg3 from "../assets/images/Background/seeds1.png";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "GROW YOUR OWN FRESH VEGETABLES & FRUITS",
      subtitle:
        "From juicy tomatoes to sweet berries – start your own garden with our high-quality vegetable and fruit seeds.",
      buttonText: "GET QUOTE",
      slug: "get-quote",
      buttonLink: "/contact-us",
      bgImage: bg1,
    },
    {
      id: 2,
      title: "BEAUTIFY YOUR HOME WITH VIBRANT FLOWERS",
      subtitle:
        "Discover our premium flower seeds and create a stunning garden that blooms with color all season long.",
      buttonText: "GET QUOTE",
      slug: "get-quote",
      buttonLink: "/contact-us",
      bgImage: bg2,
    },
    {
      id: 3,
      title: "QUALITY SEEDS FOR BETTER HARVEST",
      subtitle:
        "Rebecca Seed Company provides premium quality seeds for commercial and home gardeners.",
      buttonText: "GET IN TOUCH",
      slug: "quality-seeds",
      buttonLink: "/contact-us",
      bgImage: bg3,
    },
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden">
        {slides.map(
          (slide, index) =>
            index === currentSlide && (
              <motion.img
                key={slide.id}
                src={slide.bgImage}
                alt="Background"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1, opacity: 0 }}
                animate={{ scale: 1.15, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            )
        )}
      </div>

      {/* Glass Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Slider Content */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="flex h-full"
          animate={{ x: `-${currentSlide * 100}%` }}
          transition={{
            type: "tween",
            ease: [0.25, 0.1, 0.25, 1],
            duration: 1.8,
          }}
        >
          {slides.map((slide, slideIndex) => (
            <div
              key={slide.id}
              className="w-full h-full flex-shrink-0 flex items-center justify-center"
            >
              <div className="relative z-10 max-w-5xl mx-auto px-10 sm:px-6 md:px-8 text-center">
                <motion.h1
                  initial={{ y: 50, opacity: 0 }}
                  animate={{
                    y: slideIndex === currentSlide ? 0 : 50,
                    opacity: slideIndex === currentSlide ? 1 : 0,
                  }}
                  transition={{ delay: 0.4, duration: 1 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wider text-white mb-4 sm:mb-6 md:mb-8"
                >
                  {slide.title}
                </motion.h1>

                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{
                    width: slideIndex === currentSlide ? "80%" : 0,
                    opacity: slideIndex === currentSlide ? 1 : 0,
                  }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="h-[2px] bg-white mx-auto mb-4 sm:mb-6 md:mb-8 max-w-[500px]"
                />

                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{
                    y: slideIndex === currentSlide ? 0 : 30,
                    opacity: slideIndex === currentSlide ? 1 : 0,
                  }}
                  transition={{ delay: 1, duration: 1 }}
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-6 sm:mb-8 md:mb-12 max-w-3xl mx-auto px-2"
                >
                  {slide.subtitle}
                </motion.p>

                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{
                    y: slideIndex === currentSlide ? 0 : 30,
                    opacity: slideIndex === currentSlide ? 1 : 0,
                  }}
                  transition={{ delay: 1.3, duration: 1 }}
                >
                  <Link
                    to={slide.buttonLink}
                    className={`inline-block ${
                      slide.slug === "get-quote"
                        ? "text-white bg-primary rounded-full hover:bg-transparent hover:border-primary hover:border-2 hover:text-primary px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm md:text-base"
                        : "text-black bg-white rounded-full hover:bg-transparent hover:border-white hover:border-2 hover:text-white px-4 sm:px-6 py-2 sm:py-3 transition-all duration-300 text-xs sm:text-sm md:text-base"
                    } tracking-wider`}
                  >
                    {slide.buttonText}
                  </Link>
                </motion.div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-1 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-30
                   p-1.5 sm:p-2 md:p-3 rounded-full bg-transparent sm:bg-white text-white sm:text-black hover:scale-110 transition"
        aria-label="Previous slide"
      >
        <BsChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-1 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-30
                   p-1.5 sm:p-2 md:p-3 rounded-full bg-transparent sm:bg-white text-white sm:text-black hover:scale-110 transition"
        aria-label="Next slide"
      >
        <BsChevronRight className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2 sm:space-x-4">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-[10px] sm:h-[10px] rounded-full transition-all ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50"
            }`}
            whileHover={{ scale: 1.2 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
