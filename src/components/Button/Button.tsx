import React from "react";

interface ButtonProps {
  /**
   * Optional click handler
   */
  onClick: () => void;
  /**
   * The content of the button
   */
  children: React.ReactNode;
  /**
   * The variant of the button (primary or secondary)
   */
  variant: "primary" | "secondary";
  /**
   * Additional classes to be added to the button
   */
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant = "primary",
  className = "",
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
