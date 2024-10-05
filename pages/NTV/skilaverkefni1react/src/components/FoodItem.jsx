import React from "react";

const FoodItem = ({ image, name, description }) => {
  return (
    <div className="relative max-w-xs rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-[#d4a83f] to-[#f4f0e3] transition-all duration-300 ease-in-out">
      <img className="w-full h-48 object-cover" src={image} alt={name} />
      <div className="p-4">
        <h3 className="text-lg font-bold text-[#416b76]">{name}</h3>
        <p className="text-[#416b76] mt-2">{description}</p>
      </div>
      <div className="absolute inset-0 transition-all duration-300 ease-in-out rounded-lg hover:bg-[#7e5951] hover:opacity-30" />
    </div>
  );
};

export default FoodItem;
