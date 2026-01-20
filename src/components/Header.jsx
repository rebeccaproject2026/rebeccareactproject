import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <h1>Rebecca Overseas</h1>
          </Link>
        </div>
        <div className="contact-info">
          <p>Email: info@rebeccaoverseas.com</p>
          <p>Phone: +91 XXXXX XXXXX</p>
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
