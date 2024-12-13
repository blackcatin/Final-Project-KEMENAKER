import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Dishes from "./components/Dishes";
import Footer from "./components/Footer";

const App = () => {
  const [dataMenu, setDataMovies] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  
  async function getData() {
    const url = "https://fossil-atlantic-rooster.glitch.me/menu"; 
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);

      setDataMovies(json); 
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getData(); 
  }, []); 

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar cart={cart} setCart={setCart} setCartOpen={setCartOpen} />
      <Dishes
        cart={cart}
        setCart={setCart}
        setCartOpen={setCartOpen}
        dataMenu={dataMenu} 
      />
      <Footer cart={cart} setCart={setCart} setCartOpen={setCartOpen} />
    </div>
  );
};

export default App;
