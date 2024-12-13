import React, { useState } from "react";
import { BiRestaurant } from "react-icons/bi";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";

const Navbar = ({ cart, setCart, setCartOpen, notification }) => {
  const [menu, setMenu] = useState(false);
  const [cartOpen, setCartOpenState] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const toggleCart = () => {
    setCartOpenState(!cartOpen);
    setCartOpen(!cartOpen);  
  };

  const calculateTotal = () => {
    return cart.reduce(
      (total, item) =>
        total + parseInt(item.price.replace("Rp ", "").replace(".", "")),
      0
    );
  };

  return (
    <div className="fixed w-full">
      <div>
        <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className="flex flex-row items-center cursor-pointer">
            <span>
              <BiRestaurant size={32} />
            </span>
            <h1 className="text-xl font-semibold">TalentFoodie</h1>
          </div>

          <div className="hidden md:flex flex-1 justify-center mx-10">
            <input
              type="text"
              placeholder="Search for menu..."
              className="w-full max-w-md px-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          <div className="hidden md:flex items-center space-x-5">
          <div className="relative">
  {notification && (
    <div className="absolute -top-5 right-0 bg-teal-400 text-white text-sm px-3 py-1 rounded">
      {notification}
    </div>
  )}
  <AiOutlineShoppingCart
    size={24}
    className="cursor-pointer"
    title="Cart"
    onClick={toggleCart}
  />
  {cart.length > 0 && (
    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
      {cart.length}
    </span>
  )}
</div>

            <AiOutlineUser size={24} className="cursor-pointer" title="Account" />
          </div>
        </div>
      </div>

      {/* Keranjang Pop-Up */}
      {cartOpen && (
        <div className="fixed top-0 right-0 bg-white shadow-lg p-5 w-80 h-screen">
          <h2 className="text-2xl font-semibold">Your Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              <ul>
                {cart.map((item, index) => (
                  <li key={index} className="flex justify-between">
                    <span>{item.title}</span>
                    <span>{item.price}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between mt-4">
                <span className="font-semibold">Total:</span>
                <span className="font-semibold">
                  Rp {calculateTotal().toLocaleString()}
                </span>
              </div>
              <button
                onClick={() => {
                  alert("Checkout berhasil!");
                  setCart([]); 
                  setCartOpenState(false); 
                }}
                className="mt-4 w-full bg-teal-400 text-white px-4 py-2 rounded"
              >
                Checkout
              </button>
              <button
                onClick={() => setCartOpenState(false)}
                className="mt-2 w-full bg-gray-300 text-black px-4 py-2 rounded"
              >
                Close
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
