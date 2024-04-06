/* eslint-disable react/prop-types */
import React from "react";
import Products from "./Products";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoIosMoon } from "react-icons/io";

const Cart = ({
    mode,
    products,
    incrementQuantity,
    decrementQuantity,
    deleteProduct,
    resetQuantity,
    emptyCart,
    changeMode,
}) => {

    
  return (
    <div className="w-3/4 mx-auto mt-[3em] rounded-xl">
      <div className="flex items-center text-white bg-zinc-900 justify-evenly rounded-2xl py-2">
        <button
          className={`btn ${mode ? "btn-neutral" : "btn-danger"}`}
            onClick={() => emptyCart()}
        >
          empty
        </button>
        <button
          className={`btn ${mode ? "btn-primary" : "btn-danger"}`}
            onClick={() => resetQuantity()}
        >
          reset
        </button>
        <button className="btn " onClick={() => changeMode()}>
          {mode ? (
            <MdOutlineWbSunny className="text-2xl" />
          ) : (
            <IoIosMoon className="text-2xl" />
          )}
        </button>
      </div>
      <div className="mt-[0.2em] text-3xl flex flex-col justify-center gap-y-5">
        {!products.length ? (
          <div
            className={`text-center py-5 text-[1em] ${!mode && "text-white"} `}
          >
            Empty Cart (there are no selected products )
          </div>
        ) : (
          <div className="mt-[1em] text-3xl flex flex-col justify-center  gap-y-5">
            {products.map((product, index) => (
              <div key={index}>
                <Products
                  product={product}
                  incrementQuantity={incrementQuantity}
                  decrementQuantity={decrementQuantity}
                    deleteProduct={deleteProduct}
                />
              </div>
            ))}
            <div
              className={`w-full py-5 text-center text-[0.9em] ${
                !mode && "text-white"
              }`}
            >
              total :
              {products
                .map((product) => {
                  return product.items * product.price;
                })
                .reduce((fTotal, sTotal) => {
                  return fTotal + sTotal;
                })}
              $
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Cart;