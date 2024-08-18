import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const Suggestions = () => {
  const gptresult = useSelector((store) => store.gpt);
  const { movieNames, movieResult } = gptresult;
  if (!movieNames) return null;

  return (
    <div className='p-4 m-4 bg-black text-white'>
      <div>
        {movieNames.map((movName, index) => (
          <MovieList
            key={movName}
            title={movName}
            movies={movieResult[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
