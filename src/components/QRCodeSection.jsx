import { QRCodeSVG } from "qrcode.react";
import qrCodeImg from "../assets/images/qrcode/qr-code.png";
import "./QRCodeSection.css";

const QRCodeSection = () => {
  // Get the current origin and create URL for products page
  const getProductsUrl = () => {
    if (typeof window !== "undefined") {
      return `${window.location.origin}/downloads`;
    }
    return "/downloads";
  };
  const websiteUrl = getProductsUrl();

  return (
    <section className="qr-section">
      <div className="qr-container">
        <h3>Welcome to Rebecca Overseas</h3>
        <p className="subtitle">
          Scan the QR code below to explore our products
        </p>
        {/* <div className="qr-code-wrapper">
          <QRCodeSVG
            value={websiteUrl}
            size={280}
            level="H"
            includeMargin={true}
          />
        </div> */}
        <div className="qr-code-wrapper">
          <img
            src={qrCodeImg}
            alt="Download Rebecca Overseas Catalog"
            width={285}
            height={280}
          />
        </div>
        <p>Point your camera at the QR code to view our product catalog</p>
      </div>
    </section>
  );
};

export default QRCodeSection;
