import React, { useState } from "react";
import "./imagepopup.css";

const ImagePopUp = ({ imageSrc, title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    document.body.classList.add("popup-open");
  };

  const handleClose = () => {
    setIsOpen(false);
    document.body.classList.remove("popup-open");
  };

  return (
    <>
      <img
        src={imageSrc}
        alt={title}
        className="popup-thumbnail"
        onClick={handleOpen}
      />

      {isOpen && (
        <div className="popup-overlay" onClick={handleClose}>
          <div
            className="popup-box"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            {/*Close (X) Button */}
            <button className="close-btn" onClick={handleClose}>
              ✕
            </button>

            <img src={imageSrc} alt={title} className="popup-image" />
            <div className="popup-text">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImagePopUp;
