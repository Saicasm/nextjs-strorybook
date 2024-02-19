import React from "react";
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant: "primary" | "secondary";
}
const Button: React.FC<ButtonProps> = ({ onClick, children, variant }) => {
  let buttonClasses = "px-4 py-2 rounded focus:outline-none";

  if (variant === "primary") {
    buttonClasses += " bg-blue-500 text-white";
  } else if (variant === "secondary") {
    buttonClasses += " bg-gray-500 text-white";
  }

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
