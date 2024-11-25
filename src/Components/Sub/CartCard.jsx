import React from "react";

const CartCard = ({ item, onRemove, onEdit, isSelected, onCheckboxChange }) => {
  return (
    <div
      key={item.cartId}
      className="bg-white rounded-lg shadow-lg p-4 grid grid-cols-5 gap-4"
    >
      {/* Checkbox and Title */}
      <div className="col-span-5 flex items-center gap-2">
        <input
          type="checkbox"
          checked={!!isSelected}
          onChange={() => onCheckboxChange(item.cartId)}
          className="w-5 h-5 accent-yellow-500"
        />
        <h3 className="text-lg font-semibold text-gray-800 truncate flex-1">
          {item.title}
        </h3>
        <span className="text-sm text-gray-500">({item.packageName})</span>
      </div>

      {/* Image */}
      <div className="col-span-5 md:col-span-2 flex items-center justify-center">
        <img
          src={item.image}
          alt={item.title}
          className="w-full max-h-48 object-cover rounded-md border"
        />
      </div>

      {/* Details */}
      <div className="col-span-5 md:col-span-3 flex flex-col gap-2 text-sm">
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-gray-100 rounded-md shadow text-gray-600">
            <strong>Date:</strong> {item.tourDate}
          </span>
          <span className="px-2 py-1 bg-gray-100 rounded-md shadow text-gray-600">
            <strong>Transfer:</strong> {item.transferOption}
          </span>
          <span className="px-2 py-1 bg-gray-100 rounded-md shadow text-gray-600">
            <strong>Adults:</strong> {item.adult}
          </span>
          <span className="px-2 py-1 bg-gray-100 rounded-md shadow text-gray-600">
            <strong>Children:</strong> {item.child}
          </span>
          <span className="px-2 py-1 bg-gray-100 rounded-md shadow text-gray-600">
            <strong>Infants:</strong> {item.infant}
          </span>
        </div>
        <p className="mt-2 text-gray-700">
          <strong>Price:</strong> <span className="text-yellow-600">{item.totalAmount} AED</span>
        </p>
      </div>

      {/* Actions */}
      <div className="col-span-5 flex justify-between items-center mt-4">
        <div className="flex gap-2">
          <button
            className="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-400 transition"
            onClick={() => onEdit(item.cartId)}
          >
            Edit
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-400 transition"
            onClick={() => onRemove(item.cartId)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
