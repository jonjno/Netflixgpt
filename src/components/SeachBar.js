import React, { useRef } from "react";
import lang from "../utils/language";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { options } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const SeachBar = () => {
  const dispatch = useDispatch();
  const la = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const value = searchText.current?.value;

  const searchMovie = async (movies) => {
    const dataMovie = await fetch(
      "https://api.themoviedb.org/3/search/" +
        movies +
        "?include_adult=false&language=en-US&page=1",
      options
    );

    const jsonmovie = await dataMovie.json();
    return jsonmovie.results;
  };

  const gptQuery =
    "Act as a Movie Recommendation System and sugggest some movies for the query" +
    value +
    ".only giv me name of 5 movies ,comma seperated  like the exmaple result given aheah. exmaple Result: Gadar,Don,Sholay,Golmaal,Koi mil Gaya";

  const searchGpt = async () => {
    console.log(value);
    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResult.choices?.[0]?.message?.content);
    const gptMovies = gptResult.choices?.[0]?.message?.content.split(",");
    const promiseArray = gptMovies.map((movies) => searchMovie(movies));

    const finalMovie = await Promise.all(promiseArray);
    dispatch(
      addGptMovieResult({ movieNames: gptResult, movieResult: finalMovie })
    );
  };
  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='p=6 m-6 w-1/2 bg-black align-middle'
      >
        <input
          ref={searchText}
          className='p=4 m-4'
          type='text'
          placeholder='what would u like to watch today'
        ></input>
        <button className='py-2 px-4 bg-red-700 text-white' onClick={searchGpt}>
          {lang[la].search}
        </button>
      </form>
    </div>
  );
};

export default SeachBar;
