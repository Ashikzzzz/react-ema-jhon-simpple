import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItem.css";

const ReviewItem = ({ product, handleRemoveItem }) => {
  const { name, quantity, price, img, id } = product;
  return (
    <div className="review-item">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review-detail-container">
        <div className="detail-container">
          <h3>Name:{name}</h3>
          <p>Price:{price}</p>
          <p>Quantity:{quantity}</p>
        </div>
        <div className="delete-container">
          <button
            onClick={() => handleRemoveItem(product.id)}
            className="btn-dlt"
          >
            <FontAwesomeIcon
              className="delete-icon"
              icon={faTrashAlt}
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
