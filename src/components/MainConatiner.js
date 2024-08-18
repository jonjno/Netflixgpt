import React from "react";
import { useSelector } from "react-redux";
import VideoBackgraound from "./VideoBackgraound";
import VideoTitle from "./VideoTitle";

const MainConatiner = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovie);

  if (!movies) return;
  const FirstMovie = movies[0];

  const { original_title, overview, id } = FirstMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackgraound id={id} />
    </div>
  );
};

export default MainConatiner;
