import React from "react";

const Product = ({ product }) => {
  const { name, price, quantity, img } = product;
  return (
    <div className="col">
      <div className="card h-100">
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Price: ${price}</p>
          <p className="card-text">
            <small>Quantity: {quantity}</small>
          </p>
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-between">
            <button className="btn btn-primary">Update</button>
            <button className="btn btn-primary">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
