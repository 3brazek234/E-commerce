import { useState } from "react";
import { FaStar } from "react-icons/fa";

export const RatingStars = () => {
  const [rating, setRating] = useState<number>(0);

  return ( 
    <div className="mb-6 flex gap-3">
      <h3 className="text-gray-500 font-light text-base leading-relaxed mb-2">Rate this product:</h3>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            className={` text-2xl cursor-pointer transition-colors ${
              star <= rating
                ? "text-yellow-400"
                : "text-gray-300 hover:text-yellow-200"
            }`}
            onClick={() => setRating(star)}
          />
        ))}
      </div>
    </div>
  );
};
