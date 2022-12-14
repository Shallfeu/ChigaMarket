import React, { useRef, useState, useEffect } from "react";
// Utils
import config from "../../config.json";

interface ProductImageProps {
  image: string;
  setImage: any;
}

const ProductImage: React.FC<ProductImageProps> = ({ image, setImage }) => {
  const [selectedFile, setSelectedFile] = useState<any>();
  const [preview, setPreview] = useState<any>();
  const inputRef = useRef<HTMLInputElement>(null);

  const triggerInput = () => {
    if (inputRef.current) inputRef.current.click();
  };

  useEffect(() => {
    if (!selectedFile) {
      setPreview(null);
      return;
    }

    const objectUrl = URL?.createObjectURL(selectedFile);
    setPreview(objectUrl as any);
    setImage(selectedFile);
    return () => URL?.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e: any) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(null);

      return;
    }

    setSelectedFile(e.target.files[0]);
  };

  const handleDelete = () => {
    setSelectedFile(null);
    setImage(null);
  };

  return (
    <div className="edit-product__image">
      {selectedFile ? (
        <img className="image__image" src={preview} alt="Product" />
      ) : image ? (
        <img
          className="image__image"
          src={`${config.productEndPoint}/${image}`}
          alt="Product"
        />
      ) : (
        ""
      )}

      <input
        ref={inputRef}
        className="image__input"
        accept="image/*"
        onChange={(e) => onSelectFile(e)}
        type="file"
        placeholder="Upload image"
      />
      <div className="image__btns">
        <button
          type="button"
          onClick={() => triggerInput()}
          className="image__btns-item"
        >
          Upload
        </button>
        {selectedFile && (
          <button
            type="button"
            onClick={handleDelete}
            className="avatar__btns-item delete"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductImage;
