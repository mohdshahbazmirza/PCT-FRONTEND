import React, { useState } from "react";

const PaymentDialogue = ({ cart, onClose, amount }) => {
  const [paymentDetails, setPaymentDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Payment details submitted:", paymentDetails);
    console.log("Payment details submitted:", cart);
    console.log("Payment details submitted:", amount);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      {/* Dialogue Content */}
      <div className="relative flex flex-col md:flex-row gap-6 p-6 bg-gray-50 shadow-lg rounded-lg w-full max-w-5xl h-[90%]">
        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 bg-white shadow-md rounded-lg p-6 border overflow-y-auto"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Main traveller's contact details
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={paymentDetails.firstName}
                onChange={handleChange}
                className="w-full border rounded-md p-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                placeholder="First name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={paymentDetails.lastName}
                onChange={handleChange}
                className="w-full border rounded-md p-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                placeholder="Last name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your email address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={paymentDetails.email}
                onChange={handleChange}
                className="w-full border rounded-md p-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                placeholder="Email address"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={paymentDetails.phone}
                onChange={handleChange}
                className="w-full border rounded-md p-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                placeholder="+123 456 7890"
                required
              />
            </div>
          </div>
          <div className="border-t pt-4 mt-auto">
            <h3 className="font-semibold text-lg text-gray-800">
              Total (AED): {amount}
            </h3>
          </div>
          <button
            type="submit"
            className="w-full mt-4 bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition"
          >
            Continue
          </button>
        </form>

        {/* Summary Section */}
        <div className="flex flex-col w-full md:w-1/3 bg-white shadow-md rounded-lg p-6 border overflow-y-auto">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Your booking
          </h2>
          {cart.map((item) => (
            <div key={item.cartId} className="border-b pb-4 mb-4">
              <h3 className="font-semibold text-gray-700">{item.title}</h3>
              <p className="text-gray-500">{item.packageName}</p>
              <p className="text-sm text-gray-500">Date: {item.tourDate}</p>
              <p className="text-sm text-gray-500">
                Adults: {item.adult} | Children: {item.child} | Infants: {item.infant}
              </p>
              <p className="text-sm text-gray-500">
                Transfer Option: {item.transferOption}
              </p>
              <p className="font-medium text-gray-700 mt-2">
                Price: AED {item.totalAmount}
              </p>
            </div>
          ))}
          <div className="border-t pt-4 mt-auto">
            <h3 className="font-semibold text-lg text-gray-800">
              Total (AED): {amount}
            </h3>
          </div>
        </div>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600"
          aria-label="Close Payment Dialogue"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default PaymentDialogue;
