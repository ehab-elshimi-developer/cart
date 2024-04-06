/* eslint-disable react/prop-types */
import React from "react";

const Products = ({
  product,
  incrementQuantity,
  decrementQuantity,
  deleteProduct,
}) => {
    
  return (
    <div className="bg-zinc-700 text-zinc-100 flex items-center justify-evenly py-1 rounded-2xl px-8 text-[0.55em]">
      <p>name: {product.name}</p>
      <p>price: {product.price}</p>
      <p>items: {product.items}</p>
      <button
        onClick={() => incrementQuantity(product)}
        className="btn btn-neutral"
      >
        +
      </button>
      <button
        onClick={() => decrementQuantity(product)}
        className="btn btn-primary "
        disabled={product.items <= 1 && true}
      >
        -
      </button>
      <button
        onClick={() => deleteProduct(product)}
        className="btn btn-danger "
      >
        delete
      </button>
      <p>total: {product.price * product.items}</p>
    </div>
  );
};

export default Products;