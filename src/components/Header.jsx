import { Link } from "react-router-dom";
import { MdOutlineAttachEmail, MdPhone } from "react-icons/md";
import Logo from "../assets/img/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Rebecca OPverseas" className="logo-img w-[14rem] h-[50px]" />
          </Link>
        </div>
        <div className="contact-info">
          <p className="flex items-center gap-2">
            <MdOutlineAttachEmail className="text-lg" />
            <a href="mailto:rebeccaoverseascompany@gmail.com" className="hover:underline">
              rebeccaoverseascompany@gmail.com
            </a>
          </p>
          <p className="flex items-center gap-2">
            <MdPhone className="text-lg" />
            <a href="tel:+917874776688" className="hover:underline">
              +91 78 74 77 66 88
            </a>
          </p>
        </div>
      </div>
      <nav className="p-4 header-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <a href="/about-us">About</a>
          </li>
          <li>
            <a href="/contact-us">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
