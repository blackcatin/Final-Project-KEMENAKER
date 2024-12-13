import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Dishes from "./components/Dishes";
import Footer from "./components/Footer";

const App = () => {
  const [cart, setCart] = useState([]); 
  const [cartOpen, setCartOpen] = useState(false); 
  return (
<div className="min-h-screen flex flex-col">
  <Navbar cart={cart} setCart={setCart} setCartOpen={setCartOpen} />
  <Dishes cart={cart} setCart={setCart} setCartOpen={setCartOpen} />
  <Footer cart={cart} setCart={setCart} setCartOpen={setCartOpen} />
</div>

  );
};

export default App;
