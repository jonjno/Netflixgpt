import React from "react";
import { image_cdn } from "../utils/constants";

const MovieCard = ({ posterpath }) => {
  if (!posterpath) return null;
  return (
    <div className='w-48 pr-4'>
      <img alt='alt' src={image_cdn + posterpath} />
    </div>
  );
};

export default MovieCard;
