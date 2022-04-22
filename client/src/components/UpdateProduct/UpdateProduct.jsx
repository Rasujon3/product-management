import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const { register, handleSubmit } = useForm();
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => {
        // Do something for an error here
        console.log("Error Reading data =" + err);
      });
  }, [id]);

  const navigate = useNavigate();
  const onSubmit = (data) => {
    // send data to the server
    const url = `http://localhost:5000/product/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        toast("user added successfully!!!");
        setTimeout(() => {
          navigate("/home");
        }, 3000);
      });
  };
  return (
    <div className="w-50 mx-auto">
      <h2 className="text-center">Update product</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2"
          placeholder={product.name}
          {...register("name", { required: true, maxLength: 20 })}
          required
        />
        <input
          className="mb-2"
          placeholder={product.price}
          type="number"
          {...register("price")}
          required
        />
        <input
          className="mb-2"
          placeholder={product.quantity}
          type="number"
          {...register("quantity")}
          required
        />
        <input
          className="mb-2"
          placeholder={product.img}
          type="text"
          {...register("img")}
          required
        />
        <input type="submit" value="Update Product" />
      </form>
      <ToastContainer />
    </div>
  );
};

export default UpdateProduct;
