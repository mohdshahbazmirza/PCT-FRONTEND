import React from "react";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/solid";
import { FaWhatsapp } from "react-icons/fa";


const MessageUs = () => {
  const whatsappNumber = "+971557465140"; // Replace with your phone number in international format
  const message = "I am interested in learning more about your travel and tour packages in Dubai. Can you please provide me with details? Thank you!"; 

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div
      className="fixed z-10 bottom-4 right-4 p-2 md:p-4 bg-yellow-600 hover:bg-yellow-500 rounded-full cursor-pointer"
      onClick={handleClick}
    >
      <FaWhatsapp className="md:h-8 md:w-8 h-6 w-6 text-white" />
    </div>
  );
};

export default MessageUs;
