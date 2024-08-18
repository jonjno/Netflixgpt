import React from "react";
import SeachBar from "./SeachBar";
import Suggestions from "./Suggestions";

const Search = () => {
  return (
    <div>
      <div className='absolute -z-10'>
        <img
          src='https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg'
          alt='logo'
        />
      </div>
      <SeachBar />
      <Suggestions />
    </div>
  );
};

export default Search;
