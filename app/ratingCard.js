"use client";
import React, { useState } from "react";

function RatingCard({ handleRatingChange }) {
  const [selectedRating, setSelectedRating] = useState(null);
  const ratingArray = [1, 2, 3, 4, 5];

  function handleRatingClick(rating) {
    if (selectedRating === null) {
      setSelectedRating(rating);
      handleRatingChange(rating);
    }
  }

  function handleStyle(rating) {
    if (selectedRating === null) {
      return { cursor: "pointer", background: "white", color: "black" };
    } else if (selectedRating === rating) {
      return { cursor: "not-allowed", background: "green", color: "white" };
    } else {
      return { cursor: "not-allowed", background: "white", color: "black" };
    }
  }

  return (
    <div className="rating_card">
      {ratingArray.map(function (rating) {
        return (
          <span
            key={rating}
            onClick={function () {
              handleRatingClick(rating);
            }}
            style={handleStyle(rating)}
          >
            {rating}
          </span>
        );
      })}
    </div>
  );
}

export default RatingCard;
