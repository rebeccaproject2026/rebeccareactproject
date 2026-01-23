import { Link, useNavigate } from "react-router-dom";
import rebeccaLogo from "../assets/img/rbc3.jpg";
import { allSliderProducts } from "../pages/Comman";
import { MdOutlineAttachEmail, MdWifiCalling } from "react-icons/md";
import { IoEarth } from "react-icons/io5";

const MainFooter = () => {
  const navigate = useNavigate();
  // Get top 5 products from allSliderProducts
  const topProducts = allSliderProducts.slice(0, 5);

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Products", path: "/products" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    // <footer className="bg-gradient-to-t from-gray-800 to-gray-500 text-white">
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-[5rem] py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[0.8fr_0.8fr_0.8fr_1fr_1.2fr] gap-5">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img
                src={rebeccaLogo}
                alt="Rebecca Seed Company"
                className="h-14 w-auto mb-4 rounded-md"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Rebecca is a trusted name in the seed industry, committed to
              delivering high-quality and reliable seeds. With a focus on
              innovation and sustainability, we support farmers in achieving
              healthy growth and better yields.
            </p>
          </div>

          {/* Top Products */}
          <div>
            <h3 className="text-lg tracking-wider text-white mb-4">
              Top Products
            </h3>
            <ul className="space-y-2">
              {topProducts.map((product) => (
                <li key={product.id}>
                  <h3
                    onClick={() => navigate(`/product/${product.slug}`)}
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center cursor-pointer"
                  >
                    <i className="fas fa-angle-right mr-2 text-primary"></i>
                    {product.name} - {product.label}
                  </h3>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg tracking-wider text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center"
                  >
                    <i className="fas fa-angle-right mr-2 text-primary"></i>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          {/* Contact Us – Column 1 */}
          <div>
            <h3 className="text-lg text-white tracking-wider mb-4">
              Contact Us
            </h3>

            <div className="text-gray-300 text-sm space-y-4 leading-relaxed">
              <div>
                <p className="font-medium text-white">Group of Company:</p>
                <p className="mt-1">REBECCA OVERSEAS INC.</p>
              </div>

              <div>
                <p>11 Lewis PI Piscataway 08854 NJ USA</p>
              </div>

              <div>
                <p>Rebecca Research Unit, </p>
                <p>S No 44, Bannerghatta Main Road, Gulakamale
                Village, Bangalore – 560082, Karnataka (India).</p>
              </div>
            </div>
          </div>

          {/* Contact Us – Column 2 */}
          <div>
            <h3 className="text-lg text-white tracking-wider mb-4">
              Marketing & Support (India)
            </h3>

            <div className="text-gray-300 text-sm space-y-4 leading-relaxed">
              <div>
                {/* <p className="font-medium text-white">
                  Produced, Imported, Packed & Marketed by:
                </p> */}
                <p className="mt-1">
                  REBECCA OVERSEAS COMPANY
                  <br />
                  Block B-605, Shilp Corporate Park,
                  <br />
                  B/s Aaron Spectra, Opp. Rajpath Club,
                  <br />
                  Bodakdev, Ahmedabad, Gujarat – 380054
                  <br />
                  Gujarat (India)
                </p>
              </div>

              <div className="space-y-1">
                <p className="flex items-center gap-2">
                  <span className="font-medium text-white shrink-0">
                    <MdOutlineAttachEmail />
                  </span>
                  <a
                    href="mailto:rebeccaoverseascompany@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    rebeccaoverseascompany@gmail.com
                  </a>
                </p>

                <p className="flex items-center gap-2">
                  <span className="font-medium text-white shrink-0">
                    <MdWifiCalling />
                  </span>
                  +91 78 74 77 66 88
                </p>

                <p className="flex items-center gap-2">
                  <span className="font-medium text-white shrink-0">
                    <IoEarth />
                  </span>
                  <a
                    href="https://www.rebeccaoverseas.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    www.rebeccaoverseas.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-400 text-sm">
            &copy; 2026 Rebecca. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
