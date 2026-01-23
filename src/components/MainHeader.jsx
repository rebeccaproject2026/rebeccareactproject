import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import rebeccaLogo from "../assets/img/Logo.svg";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { productsData } from "../pages/Comman";

const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [openCategories, setOpenCategories] = useState({});
  const navigate = useNavigate();

  const handleProductClick = (slug) => {
    setIsMenuOpen(false);
    setIsProductsDropdownOpen(false);
    setOpenCategories({});
    navigate(`/product/${slug}`);
  };

  const toggleCategory = (categoryName) => {
    setOpenCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  // Convert to Ant Design menu format using productsData from Comman.jsx
  const menuItems = productsData.map((category, index) => ({
    key: `cat-${index}`,
    label: category.category,
    children: category.varieties.map((variety) => ({
      key: variety.slug,
      label: variety.label,
      onClick: () => handleProductClick(variety.slug),
    })),
  }));

  return (
    <header className="bg-white shadow-lg">
      {/* Top Header - Green Bar */}
      <div className="bg-primary text-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[6rem]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm py-2">
            <div className="flex items-center whitespace-nowrap">
              <i className="fas fa-map-marker-alt mr-2 flex-shrink-0"></i>
              <span className="text-xs sm:text-sm">
                11 Lewis Pl, Piscataway 08854. NJ. USA
              </span>
            </div>
            <div className="flex items-center space-x-3 mt-2 md:mt-0">
              <a href="#" className="hover:text-accent transition-colors">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <i className="fab fa-google-plus"></i>
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white">
        <div className="container mx-auto">
          <nav className="flex items-center justify-between py-4 sm:py-4 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[3rem] gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <img
                src="/assets/assets/img/rebecca1.png"
                alt="Rebecca Seed Company"
                className="h-8 sm:h-12"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextElementSibling.style.display = "flex";
                }}
              />
              <div className="items-center hidden">
                <img
                  src={rebeccaLogo}
                  alt="rebecca-logo"
                  className="w-[14rem] h-[50px]"
                />
              </div>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="navbar-link">
                Home
              </Link>
              <Link to="/about-us" className="navbar-link">
                About Us
              </Link>

              {/* Ant Design Dropdown with submenus */}
              <Dropdown
                menu={{ items: menuItems }}
                placement="bottomRight"
                overlayClassName="header-products-dropdown"
                trigger={["click", "hover"]}
              >
                <button className="navbar-link flex items-center">
                  <Space>
                    Products
                    <DownOutlined />
                  </Space>
                </button>
              </Dropdown>

              <Link to="/contact-us" className="navbar-link">
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700 hover:text-primary flex-shrink-0 ml-2"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                setIsProductsDropdownOpen(false);
                setOpenCategories({});
              }}
            >
              <i
                className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`}
              />
            </button>
          </nav>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white border-t py-4 shadow-lg">
              <div className="flex flex-col space-y-4 px-4">
                <Link
                  to="/"
                  className="navbar-link"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsProductsDropdownOpen(false);
                    setOpenCategories({});
                  }}
                >
                  Home
                </Link>
                <Link
                  to="/about-us"
                  className="navbar-link"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsProductsDropdownOpen(false);
                    setOpenCategories({});
                  }}
                >
                  About Us
                </Link>

                <div>
                  <div
                    className="navbar-link flex items-center mb-2 cursor-pointer"
                    onClick={() =>
                      setIsProductsDropdownOpen(!isProductsDropdownOpen)
                    }
                  >
                    Products
                    <DownOutlined
                      className={`ml-2 transition-transform ${
                        isProductsDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {isProductsDropdownOpen && (
                    <div className="ml-6 space-y-1 max-h-60 overflow-y-auto">
                      {productsData.map((cat) => (
                        <div key={cat.category} className="space-y-1">
                          <div
                            className="navbar-link py-2 flex items-center justify-between"
                            onClick={() => toggleCategory(cat.category)}
                          >
                            <span>{cat.category}</span>
                            <DownOutlined
                              className={`ml-2 transition-transform text-xs ${
                                openCategories[cat.category] ? "rotate-180" : ""
                              }`}
                            />
                          </div>
                          {openCategories[cat.category] && (
                            <div className="ml-4 space-y-1">
                              {cat.varieties.map((v) => (
                                <div
                                  key={v.slug}
                                  className="navbar-link py-1.5"
                                  onClick={() => handleProductClick(v.slug)}
                                >
                                  {v.label}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  to="/contact-us"
                  className="navbar-link"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsProductsDropdownOpen(false);
                    setOpenCategories({});
                  }}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
