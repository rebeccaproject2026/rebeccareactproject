import "./ProductCard.css";

const ProductCard = ({ product }) => {

  const handleView = (fileId) => {
      const url = `https://drive.google.com/file/d/${fileId}/view`;
      window.open(url, '_blank');
  };

  const handleDownload = (fileId, fileName) => {
    const url = `https://drive.google.com/uc?export=download&id=${fileId}`;

    const link = document.createElement('a');
    link.href = url;
    link.download = fileName || 'brochure.pdf';
    link.target = '_blank';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
