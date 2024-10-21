import React from "react";

const Button = ({
  text,
  onClick,
  theme = "default",
  disabled = false,
  className = "",
}) => {
  const baseStyles = "px-4 py-2 rounded-lg font-semibold focus:outline-none";

  let themeStyles;
  switch (theme) {
    case "filled":
      themeStyles = "bg-blue-600 text-white hover:bg-blue-700";
      break;
    case "disabled":
      themeStyles = "bg-gray-300 text-gray-500 cursor-not-allowed";
      break;
    case "default":
    default:
      themeStyles =
        "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100";
      break;
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${themeStyles} ${className} ${
        disabled ? "opacity-50 pointer-events-none" : ""
      }`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
