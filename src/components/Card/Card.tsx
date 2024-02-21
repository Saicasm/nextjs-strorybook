import React from "react";

interface CustomCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  className?: string;
}

const Card: React.FC<CustomCardProps> = ({
  title,
  description,
  imageUrl,
  className,
}) => {
  return (
    <div
      className={`bg-light-bg-secondary dark:bg-dark-bg-primary text-bittersweet-500  shadow-md p-6 ${className}`}
    >
      {imageUrl && (
        <div className='mb-4'>
          <img
            src={imageUrl}
            alt={title || "Card Image"}
            className='w-full h-auto rounded-lg'
          />
        </div>
      )}
      {title && <h2 className='text-xl font-semibold mb-2'>{title}</h2>}
      {description && <p className='text-gray-700 mb-4'>{description}</p>}
    </div>
  );
};

export default Card;
