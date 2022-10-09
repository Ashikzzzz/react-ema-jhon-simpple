import React from "react";
import "./ReviewItem.css";

const ReviewItem = ({ product }) => {
  const { name, quantity, price, img } = product;
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
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
