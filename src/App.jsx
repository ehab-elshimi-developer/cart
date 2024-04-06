import React, { useEffect, useState } from 'react'
import Cart from './components/Cart';
import Header from './components/Header';

function App() {
  // State
  const [mode, setMode] = useState(true);
  const [products, setProducts] = useState([]);
  const [shoppingProducts, setShoppingProducts] = useState([]);

  // get data from api
  useEffect(() => {
    fetch(`http://localhost:3000/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setShoppingProducts(data);
      });
  }, []);

  // update Page Title
  useEffect(() => {
    document.title = `Products (${products.length})`;
  }, [products]);


  // Functions
  
  // incrementQuantity
  const incrementQuantity = (obj) => {
    let newData = products.map((product) => {
      if (product.id == obj.id) {
        product.items += 1;
      }
      return product;
    });
    setProducts(newData);
  };
  // decrementQuantity
  const decrementQuantity = (obj) => {
    let newData = products.map((product) => {
      if (product.id == obj.id) {
        product.items -= 1;
      }
      return product;
    });
    setProducts(newData);
  };

  // deleteProduct
  const deleteProduct = (obj) => {
    let newData = products.filter((product) => {
      return product.id != obj.id && product;
    });
    setProducts(newData);
  };

  // resetQuantity
  const resetQuantity = () => {
    let newData = products.map((product) => {
      product.items = 1;
      return product;
    });
    setProducts(newData);
  };

  // emptyCart
  const emptyCart = () => setProducts([]);

  // changeMode
  const changeMode = () => setMode(!mode);

  // addToCart
  const addToCart = (obj) => {
    let isExisted = products.some((product) => {
      return obj.id == product.id;
    });
    isExisted ? incrementQuantity(obj) : setProducts([...products, obj]);
  };
  return (
    <>
      <div
        className={`min-h-screen ${
          mode ? "bg-lime-600 text-white " : "bg-red-950 text-stone-900"
        } `}
      >
        <Header
          mode={mode}
          products={products}
          shoppingProducts={shoppingProducts}
          addToCart={addToCart}
        />
        <Cart
          mode={mode}
          products={products}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          deleteProduct={deleteProduct}
          resetQuantity={resetQuantity}
          emptyCart={emptyCart}
          changeMode={changeMode}
        />
      </div>
    </>
  );
}

export default App
