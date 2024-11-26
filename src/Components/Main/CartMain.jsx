import React, { useEffect, useState } from "react";
import useCartStore from "../../Utlis/UseCart";
import PaymentDialogue from "./PaymentDialogue";
import CartCard from "../Sub/CartCard";

const CartMain = () => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const [showPaymentDialogue, setShowPaymentDialogue] = useState(false);
  const [selectedItems, setSelectedItems] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);

  // Calculate total amount whenever selectedItems or cart changes
  useEffect(() => {
    const total = cart
      .filter((item) => selectedItems[item.cartId])
      .reduce((sum, item) => sum + (Number(item.totalAmount) || 0), 0);

    setTotalAmount(total);
  }, [cart, selectedItems]);

  // Handle checkbox toggle for each item
  const handleCheckboxChange = (itemId) => {
    setSelectedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  // Handle checkout button click
  const handleCheckout = () => {
    const itemsToPay = cart.filter((item) => selectedItems[item.cartId]);

    if (itemsToPay.length === 0) {
      alert("Please select at least one item to proceed.");
      return;
    }

    setShowPaymentDialogue(true);
  };

  // Close payment dialogue
  const handleCloseDialogue = () => {
    setShowPaymentDialogue(false);
  };

  const handleEdit = (itemId) => {
    console.log("Editing item with ID:", itemId);
    // Implement edit logic if needed
  };

  return (
    <div className="rounded flex-grow md:px-10 lg:px-14 sm:px-6 px-2 md:py-4 lg:py-6 py-2 shadow-md">
      <h2 className="md:text-2xl text-xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-lg text-gray-500">Your cart is empty</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cart.map((item) => (
            <CartCard
              key={item.cartId}
              item={item}
              onRemove={removeFromCart}
              onEdit={handleEdit}
              isSelected={!!selectedItems[item.cartId]}
              onCheckboxChange={handleCheckboxChange}
            />
          ))}
        </div>
      )}

      <div className="flex justify-between items-center mt-6">
        <h3 className="md:text-2xl text-xl font-bold">
          Total: {totalAmount.toFixed(2)} AED
        </h3>
        <button
          className="mt-4 px-6 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-500"
          onClick={handleCheckout}
        >
          Proceed to Checkout
        </button>
      </div>

      {showPaymentDialogue && (
        <PaymentDialogue
          cart={cart.filter((item) => selectedItems[item.cartId])}
          onClose={handleCloseDialogue}
          amount={totalAmount}
        />
      )}
    </div>
  );
};

export default CartMain;
