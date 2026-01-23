import { Link } from "react-router-dom";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";
import EmpNumberImg from "../assets/images/achvmnt/1.png";
import handShakeImg from "../assets/images/achvmnt/2.png";
import locationImg from "../assets/images/achvmnt/3.png";
import cordialImg from "../assets/svg/Aboutus/1.svg";
import expworkerImg from "../assets/svg/Aboutus/3.svg";
import MordernImg from "../assets/svg/Aboutus/2.svg";
import WhyUsImg from "../assets/images/why-us/whyus.jpg";
import farmImage from "../assets/images/Background/vegi.jpg";
import ourhistoryImage from "../assets/images/history/history.jpg";
import aboutusImg from "../assets/images/aboutourcompany/aboutcompany.jpg";
import { FiCheckSquare } from "react-icons/fi";

const About = () => {
  const CountUp = ({ value, duration = 1.5 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
      if (isInView) {
        animate(count, value, {
          duration,
          ease: "easeOut",
        });
      }
    }, [isInView, value]);

    return <motion.span ref={ref}>{rounded}</motion.span>;
  };

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
                About Us
              </h1>

              <nav className="text-white text-sm sm:text-base">
                <Link to="/" className="hover:text-gray-200">
                  Home
                </Link>
                <span className="mx-2">•</span>
                <span className="text-gray-300">About Us</span>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* About Our Company Section */}
      <section className="py-10 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[6rem]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6">
                About Our Company
              </h2>
              <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base text-justify leading-relaxed">
                Rebecca is a innovative global seed Company. Engaging in
                Research for producing, processing, packaging and distributing
                high quality of seeds across world. The Company’s Strategy is to
                create new hybrids verities with novel features that combine
                high yielding and friendliness with environment resulting in
                taste, flavor, uniformity, and nutrition value. The hybrid
                varieties are appropriate for the both commercial outdoor crop
                growers and greenhouse plant raisers.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-lg">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 1.2,
                    ease: "easeOut",
                  }}
                  className="bg-[#5a5a5a] aspect-[1920/1280] flex items-center justify-center"
                >
                  <img
                    src={aboutusImg}
                    alt="About Our Company"
                    className="w-full h-full"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our History Section */}
      <section className="py-10 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[6rem]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div className="flex justify-center order-2 lg:order-1">
              <div className="w-full max-w-lg">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 1.2,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="bg-gray-400 aspect-[1920/1280] flex items-center justify-center"
                >
                  <img
                    src={ourhistoryImage}
                    alt="About Our History"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>

            <div className="order-1 lg:order-2 p-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6">
                Our History
              </h2>
              <p className="text-gray-700 mb-4 sm:mb-6 text-justify text-sm sm:text-base leading-relaxed">
                Founded with a vision to revolutionize agriculture practices
                through innovative seed technology. Rebecca Seed Company has
                grown from a small research facility to progressive global
                entity in hybrid seed development. Rebecca Overseas Company was
                Established in year 2012. Specializing in nursery Business
                Production and distribution of nursery plant base in the United
                States, the company provides a rang of seeds in vegetables,
                flowers and fruits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 sm:py-12 bg-[#f5f5f5]">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[6rem]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-6 transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  src={cordialImg}
                  alt="Cordial Service"
                  className="w-12 h-12"
                />
              </div>
              <h4 className="text-xl mb-4 text-gray-800">Cordial Service</h4>
              <p className="text-gray-600 text-sm leading-[1.75rem]">
                We believe in building of strong relationships through clear
                communication and dedicated support. Our team works closely with
                highly ethical standards to farmers to deliver reliable service
                at every stage of farming.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-8 transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  src={expworkerImg}
                  alt="Experience Worker"
                  className="w-12 h-12"
                />
              </div>
              <h4 className="text-xl mb-4 text-gray-800">Experience Worker</h4>
              <p className="text-gray-600 text-sm leading-[1.75rem]">
                Our qualified and experienced workforce brings gentle
                agricultural knowledge and hands-on expertise to every farming
                process. With skilled staff in the field, we ensure quality,
                reliability, and consistency in our products.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="p-8 transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  src={MordernImg}
                  alt="Modern Technology"
                  className="w-12 h-12"
                />
              </div>
              <h4 className="text-xl mb-4 text-gray-800">Modern Technology</h4>
              <p className="text-gray-600 text-sm leading-[1.75rem]">
                We leverage modern agricultural technology to improve crop
                quality, efficiency, and sustainability. By combining innovation
                with precision, we help farmers achieve higher production with
                creation of wealth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section with Image */}
      <section className="bg-white py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[6rem]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div className="flex justify-center order-2 lg:order-1">
              <div className="w-full bg-gray-400 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
                <img
                  src={WhyUsImg}
                  alt="Why Choose Us"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6">
                <span className="text-primary">Why</span> Choose Us?
              </h2>
              <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                We are committed to delivering of quality, reliability of
                products with aftmost care. Our focus on farmers,
                Agri-innovators, and Agripreneurs.
              </p>

              <ul className="space-y-4 leading-[1.75rem]">
                {[
                  "High-quality agricultural products sourced with care and expertise",
                  "Experienced professionals with strong farming knowledge",
                  "Commitment to sustainable and eco-friendly practices",
                  "Reliable service and on-time delivery",
                  "Modern technology for better yield and efficiency",
                  "Strong relationships built on transparency and support",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <FiCheckSquare className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-8 sm:py-12 md:py-16 lg:py-[4rem] text-white overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-center bg-cover bg-fixed sm:bg-fixed"
          style={{
            backgroundImage: `url(${farmImage})`,
          }}
        ></div>
        {/* Glass overlay (same style as Contact section) */}
        <div className="absolute inset-0 bg-[#00000080]/45"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[6rem]">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                number: "230",
                label: "Employees",
                icon: "fas fa-users",
                image: { image: EmpNumberImg },
              },
              {
                number: "984",
                label: "Valuable Clients",
                icon: "fas fa-smile",
                image: { image: handShakeImg },
              },
              {
                number: "83",
                label: "Projects Done",
                icon: "fas fa-project-diagram",
                image: { image: locationImg },
              },
              // {
              //   number: "2347",
              //   label: "Days Experience",
              //   icon: "fas fa-calendar-alt",
              //   image: { image: daysExpImg },
              // },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16  flex items-center justify-center mx-auto mb-4">
                  <img
                    src={stat.image.image}
                    alt="Employee Number"
                    className="w-10 h-10"
                  />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  <CountUp value={Number(stat.number)} />
                </div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-10 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[6rem]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl mb-4 sm:mb-6">
                <span className="text-primary">Our</span> Mission
              </h2>
              <p className="text-gray-800 leading-relaxed text-sm sm:text-base">
                To enable growers with the Best Seed varieties, Technology and
                Crop Advice with an honest effort to provide lifelong support by
                the best industry research, service, expertise, and value and
                Understanding Indian farming and respect to Indian farmer's
                value.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl mb-4 sm:mb-6">
                <span className="text-primary">Our</span> Vision
              </h2>
              <p className="text-gray-800 leading-relaxed text-sm sm:text-base">
                Be the leader and most trusted vegetable seed company in the
                heart of farmer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Green CTA Section */}
      <section className="py-6 sm:py-8 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[6rem]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h4 className="text-white text-base sm:text-lg font-medium">
                Please feel free to write us your valuable suggestions
              </h4>
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

export default About;
