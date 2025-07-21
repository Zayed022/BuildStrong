import React from "react";
import { useNavigate } from "react-router-dom";

const StickyEnquireButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed top-1/2 right-0 transform -translate-y-1/2 rotate-180 bg-[#A89160] text-white font-semibold px-4 py-2 tracking-widest shadow-lg z-50"
      style={{
        writingMode: "vertical-rl",
        textOrientation: "mixed",
        borderTopLeftRadius: "8px",
        borderBottomLeftRadius: "8px",
        transform: "translateY(-50%) rotate(180deg)",
      }}
    >
      ENQUIRE NOW
    </button>
  );
};

export default StickyEnquireButton;
