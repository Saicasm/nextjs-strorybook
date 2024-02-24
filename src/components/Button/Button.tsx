import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant: "primary" | "secondary";
  className?: string;
}
const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant,
  className,
}) => {
  let buttonClasses = "px-4 py-2 rounded focus:outline-none ";

  if (variant === "primary") {
    buttonClasses += "text-black bg-light-accent-primary  ";
  } else if (variant === "secondary") {
    buttonClasses += "text-white bg-light-accent-secondary  ";
  } else {
    buttonClasses += "";
  }

  return (
    <button className={buttonClasses + className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
