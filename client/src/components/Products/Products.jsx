import React, { useEffect, useState } from "react";
import useProducts from "../../hooks/useProducts";
import Product from "../Product/Product";

const Products = () => {
  /*   const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = `products.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []); */
  const [products, setProducts] = useProducts();
  return (
    <div className="container">
      <h2 className="text-center mt-2 mb-5">Products</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
