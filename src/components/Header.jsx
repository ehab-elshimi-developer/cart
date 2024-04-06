/* eslint-disable react/prop-types */
import React from "react";

const Header = ({ mode, products, addToCart, shoppingProducts }) => {
  return (
    <div
      className={`navbar ${
        mode
          ? "bg-zinc-900 text-white px-20"
          : "bg-gray-300 text-stone-900 px-20"
      } `}
    >
      <div className="flex">
        <a
          className="text-2xl btn btn-ghost"
          onClick={() => window.location.reload()}
        >
          Shopping
        </a>
      </div>
      <div className="flex flex-row justify-center gap-x-2 flex-1 mx-auto">
        {shoppingProducts.map((product, i) => (
          <div className="" key={product.id}>
            <button
              className={`btn ${i % 2 == 0 ? "btn-secondary" : "btn-danger"}`}
              onClick={() => addToCart(product)}
            >
              {product.name}
            </button>
          </div>
        ))}
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="text-white badge badge-sm indicator-item badge-success">
                {products.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;