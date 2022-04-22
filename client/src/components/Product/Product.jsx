import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, name, price, quantity, img } = product;
  const navigate = useNavigate();
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure");
    if (proceed) {
      const url = `http://localhost:5000/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast("Product Deleted Successfully 😊😊");
          setTimeout(() => {
            navigate("/home");
          }, 5000);
        });
    }
  };
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
            <button
              className="btn btn-primary"
              onClick={() => handleDelete(_id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Product;
