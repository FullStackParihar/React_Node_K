import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-regular-svg-icons";
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
const ProductCard = ({ product }) => {
  return (
    <div
      className={`w-[20rem] relative bg-gradient-to-br hover:cursor-pointer from-${product.color}-50 to-${product.color}-100 shadow-lg rounded-lg overflow-hidden relative transform hover:scale-105 hover:shadow-2xl transition-transform duration-300 `}
    >
      {/* Product Image */}
      <img
        className="w-full h-24 object-cover bg-white"
        src={product.image}
        alt={product.batchName}
      />
      <span className=" absolute top-16 right-4 bg-lime-600 text-white py-[20px] px-[28px] rounded-full text-5xl font-medium">
        {product.icon}
      </span>
      {/* Product Details */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-purple-800 mb-2">
          {product.batchName}
        </h2>
        <p className="text-sm text-gray-700 mb-3">{product.organization}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="bg-purple-200 text-purple-800 py-1 px-3 rounded-full text-sm font-medium">
            {product.date || "No Date"}
          </span>

        </div>
        <hr className="w-full" />
        <div className="flex justify-end gap-3 py-2 mr-2">
          <h1><FontAwesomeIcon className=" h-6 " icon={faAddressCard} /></h1>
          <h2><FontAwesomeIcon className=" h-6 " icon={faFolder} /></h2>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
