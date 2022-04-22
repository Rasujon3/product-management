import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/products`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("Product Added Successfully 😊😊");
        setTimeout(() => {
          navigate("/home");
        }, 5000);
      });
  };

  return (
    <div className="w-50 mx-auto">
      <h2 className="text-center">Please add a product</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2"
          placeholder="Product Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <input
          className="mb-2"
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <input
          className="mb-2"
          placeholder="Quantity"
          type="number"
          {...register("quantity")}
        />
        <input
          className="mb-2"
          placeholder="Image"
          type="text"
          {...register("img")}
        />
        <input type="submit" value="Add Product" />
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddProducts;
