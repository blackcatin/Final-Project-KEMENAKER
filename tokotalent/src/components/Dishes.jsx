import React, { useState } from "react";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import img5 from "../assets/img/img5.jpg";
import img6 from "../assets/img/img6.jpg";
import DishesCard from "../layouts/DishesCard";

const Dishes = ({ cart, setCart, setCartOpen, setNotification }) => {
  const dishes = [
    { img: img1, title: "Grilled Chicken", price: "Rp 57.000", description: "Delicious dish made with fresh ingredients." },
    { img: img2, title: "Savory Grilled Feast", price: "Rp 75.000", description: "A savory dish that's perfect for any occasion." },
    { img: img3, title: "Spicy Pasta Treat", price: "Rp 53.000", description: "A sweet and spicy treat for your taste buds." },
    { img: img4, title: "Herbed Chicken", price: "Rp 51.000", description: "A hearty dish with a rich flavor profile." },
    { img: img5, title: "Exotic Veggie Mix", price: "Rp 41.000", description: "A light and refreshing dish to start your meal." },
    { img: img6, title: "Spiced Tandoori", price: "Rp 63.000", description: "A comforting dish full of warmth and flavor." },
  ];

  const addToCartAndNotify = (dish) => {
    setCart((prev) => [...prev, dish]); 
    setNotification(`${dish.title} added to cart`); 
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center pt-24 pb-10">Welcome to Our Dishes</h1>
      <div className="flex flex-wrap gap-8 justify-center">
        {dishes.map((dish, index) => (
          <DishesCard
            key={index}
            img={dish.img}
            title={dish.title}
            price={dish.price}
            description={dish.description}
            addToCartAndNotify={() => addToCartAndNotify(dish)}
          >
            <button
              onClick={() => addToCartAndNotify(dish)}
              className="mt-4 px-6 py-2 bg-teal-400 text-white rounded-full"
            >
              Buy Now
            </button>
          </DishesCard>
        ))}
      </div>
    </div>
  );
};

export default Dishes;
