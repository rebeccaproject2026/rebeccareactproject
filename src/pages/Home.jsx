import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeroSlider from "../components/HeroSlider";
import ProductSlider from "../components/ProductSlider";
import farmImage from "../assets/images/Background/farm1.jpg";
import missionImage from "../assets/images/missionstatement/mission.jpg";
import { GiFireFlower, GiFruitBowl } from "react-icons/gi";
import { LuVegan } from "react-icons/lu";

const Home = () => {
  const features = [
    {
      icon: <LuVegan className="h-12 w-12" />, // replace with your vegetables icon/image
      title: "Vegetables",
      description:
        "Our vegetable seeds are carefully selected to ensure high germination, healthy growth, and excellent yields. From leafy greens to root vegetables, our range supports both home gardeners and commercial farmers across diverse climates.",
    },
    {
      icon: <GiFireFlower className="h-12 w-12" />, // replace with your flowers icon/image
      title: "Flowers",
      description:
        "We offer premium flower seeds known for vibrant colors, strong stems, and long-lasting blooms. Suitable for landscaping, gardens, and commercial cultivation, our flower varieties enhance beauty while ensuring reliable growth and adaptability.",
    },
    {
      icon: <GiFruitBowl className="h-12 w-12" />, // replace with your fruits icon/image
      title: "Fruits",
      description:
        "Our fruit seeds are bred for superior taste, consistent quality, and strong plant health. From tropical to seasonal fruits, these varieties are ideal for achieving productive harvests and sustainable farming results.",
    },
  ];

  return (
    <div id="top">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Mission Statement */}
      <section className="py-10 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[6rem]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
            {/* TEXT SECTION (ANIMATED) */}
            <motion.div
              initial={{ x: -120, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1.1,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6">
                <span className="text-primary">Mission</span> Statement
              </h2>

              <p className="text-gray-800 mb-4 sm:mb-6 text-justify text-sm sm:text-base font-medium leading-relaxed">
                To ensure growers with the high quality of seeds, supported by
                the best industry research, expertise and services with creating
                value. Our mission is to empower farmers and agricultural
                partners by providing high-quality seeds and sustainable farming
                solutions. We are committed to enhancing crop productivity,
                preserving soil health, and supporting eco-friendly practices
                that ensure long-term agricultural growth.
              </p>

              <a
                href="#top"
                className="bg-primary text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold
                         hover:bg-green-600 transition-colors duration-300
                         uppercase text-xs sm:text-sm inline-block"
              >
                LEARN MORE
              </a>
            </motion.div>

            {/* IMAGE SECTION (STATIC) */}
            <div className="flex justify-center">
              <div className="w-full max-w-lg">
                <img src={missionImage} alt="Harvesters" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Products Section */}
      <ProductSlider />

      <section className="relative min-h-[300px] sm:min-h-[420px] py-8 sm:py-12 overflow-hidden">
        {/* Background Image (FULL WIDTH) */}
        <div
          className="absolute inset-0 bg-center bg-cover bg-fixed sm:bg-fixed"
          style={{ backgroundImage: `url(${farmImage})` }}
        ></div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-center text-white text-2xl sm:text-3xl font-bold px-4 pt-6 sm:pt-0">
            Product Category
          </h1>
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[6rem] py-6 sm:py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="min-h-[280px] sm:min-h-[360px] p-6 sm:p-8 md:p-8 lg:p-10 text-center
                       bg-white
                       transition-all duration-300
                       hover:scale-[1.02]
                       hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)]
                       flex flex-col"
                >
                  <div className="w-[5rem] h-[5rem] sm:w-[6rem] sm:h-[6rem] bg-[#f5f5f5] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    {feature.icon}
                  </div>

                  <h3 className="text-lg sm:text-xl mb-3 sm:mb-4 font-semibold text-gray-800">
                    {feature.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-left">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
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

export default Home;
