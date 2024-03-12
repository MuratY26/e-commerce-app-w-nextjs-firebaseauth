"use client";
import { useState } from "react";
import Rating from "@mui/material/Rating";


export default function Rate(props) {
  const [rating, setRating] = useState(props.rate);
  return (
    <div className="flex justify-start items-center mt-2">
      <Rating
        name="simple-controlled"
        precision={0.5}
        value={rating}
        onChange={(e, newRate) => setRating(newRate)}
      />
      <p className="ml-1 mr-6">{props.rate}</p>
      <p className= "text-gray-700">{props.rateCount} Reviews</p>
    </div>
  );
}
