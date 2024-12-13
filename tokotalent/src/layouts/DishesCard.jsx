import React, { useState } from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

const DishesCard = ({ img, title, price, description, addToCartAndNotify }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAddToCart = () => {
    addToCartAndNotify({ img, title, price, description }); 
    closeModal(); 
  };

  return (
    <>
      {/* Kartu Dishes */}
      <div className="w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
        <img className="rounded-xl" src={img} alt={title} />
        <div className="space-y-4">
          <h3 className="font-semibold text-center text-xl pt-6">{title}</h3>
          <div className="flex flex-row justify-center">
            <BsStarFill className="text-brightColor" />
            <BsStarFill className="text-brightColor" />
            <BsStarFill className="text-brightColor" />
            <BsStarFill className="text-brightColor" />
            <BsStarHalf className="text-brightColor" />
          </div>

          <div className="flex flex-row items-center justify-center gap-4">
            <h3 className="font-semibold text-lg">{price}</h3>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              onClick={openModal} 
            >
              View
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>
            <img className="rounded-xl mb-4 w-full" src={img} alt={title} />
            <div className="space-y-2">
              <div className="flex flex-row justify-center">
                <BsStarFill className="text-brightColor" />
                <BsStarFill className="text-brightColor" />
                <BsStarFill className="text-brightColor" />
                <BsStarFill className="text-brightColor" />
                <BsStarHalf className="text-brightColor" />
              </div>
              <p className="text-gray-600 text-sm">{description}</p>
              <h3 className="font-semibold text-lg">{price}</h3>
            </div>
            <div className="flex justify-end gap-4 mt-6">
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded-lg"
                onClick={closeModal}
              >
                Close
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                onClick={handleAddToCart}
              >
                Confirm Purchase
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DishesCard;
