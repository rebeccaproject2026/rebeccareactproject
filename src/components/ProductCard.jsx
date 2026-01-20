import { handleView, handleDownload } from "../assets/utils/helpers";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card mt-4">
      <h3>{product.name}</h3>
      <div className="card-buttons">
        <button
          className="btn-view"
          onClick={() => handleView(product.viewFileId)}
        >
          View
        </button>
        <button
          className="btn-download"
          onClick={() =>
            handleDownload(product.downloadFileId, product.fileName)
          }
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
