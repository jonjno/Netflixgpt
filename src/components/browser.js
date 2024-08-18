import React from "react";
import Header from "./header";
import useNowplayingMovie from "../hooks/useNowPlayingMovie";
import MainConatiner from "./MainConatiner";
import SecondaryContainer from "./SecondaryContainer";
import UsePopularMovies from "../hooks/usePopularMovises";
import Search from "./Search";
import { useSelector } from "react-redux";

const Browser = () => {
  const showgpt = useSelector((store) => store.gpt.showGptSearch);
  useNowplayingMovie();
  UsePopularMovies();

  return (
    <div className='w-screen aspect-video'>
      <Header />
      {showgpt ? (
        <Search />
      ) : (
        <>
          <MainConatiner />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browser;
