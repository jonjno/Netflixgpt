import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='pt-[30%] px-12 w-screen aspect-video absolute bg-gradient-to-r text-white'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div className=''>
        <button className='bg-gray-500 text-white p-4 px-16 text-xlbg-opacity-50 rounded-sm'>
          play
        </button>
        <button className='bg-gray-500 m-3 text-white p-4 px-16 text-xlbg-opacity-50 rounded-sm'>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
