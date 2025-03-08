"use client";
import React, { useState } from "react";

function RatingCard({ setSelectedRating }) {
  const [selectedRating, setSelected] = useState(null);

  const handleRatingClick = (rating) => {
    if (selectedRating === null) {
      setSelected(rating);
      setSelectedRating(rating);
    }
  };

  return (
    <div className="rating_card">
      {[1, 2, 3, 4, 5].map((rating) => (
        <span
          key={rating}
          onClick={() => handleRatingClick(rating)}
          style={{
            cursor: selectedRating === null ? "pointer" : "not-allowed",
            background: selectedRating === rating ? "green" : "white",
            color: selectedRating === rating ? "white" : "black",
          }}
        >
          {rating}
        </span>
      ))
      }
    </div >
  );
}

export default RatingCard;
