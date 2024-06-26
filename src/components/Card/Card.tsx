import React from "react";
import Image from "next/image";

interface CustomCardProps {
  /**
   * The title of the card
   */
  title?: string;
  /**
   * The description of the card
   */
  description?: string;
  /**
   * The image url for the card
   */
  imageUrl?: string;
  /**
   * Additional classes to be added to the card
   */
  className?: string;
}

const Card: React.FC<CustomCardProps> = ({
  title,
  description,
  imageUrl,
  className = "",
}) => {
  return (
    <div
      className={`bg-light-bg-primary dark:bg-dark-bg-primary rounded-lg shadow-md p-6 ${className}`}
    >
      {imageUrl && (
        <div className="mb-4">
          <Image
            src={imageUrl}
            alt={title || "Card Image"}
            className="w-full h-auto rounded-lg"
            width={1000}
            height={1000}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
      )}
      {title && <h2 className="text-base font-semibold mb-2">{title}</h2>}
      {description && <p className="">{description}</p>}
    </div>
  );
};

export default Card;
