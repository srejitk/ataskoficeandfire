import React from 'react';
import { Link } from 'react-router-dom';

const Posts = ({ house: { url, name } }) => {
  let id = url.slice(45);
  return (
    <Link key={id} to={`/${id}`}>
      <div className="text-gray group relative col-span-1 m-1 flex h-[15rem] w-full  cursor-pointer flex-col items-center justify-center  rounded-lg  border-2  border-transparent    p-10 px-6 text-center  text-white hover:border-t-2 hover:border-white/20 hover:shadow-xl hover:shadow-yellow-500/20">
        <div className="absolute inset-0  rounded-md bg-opacity-30 bg-gradient-to-t from-blue-900/70 to-transparent   backdrop-blur-sm"></div>
        <h1 className="z-10 text-2xl font-light ">{name}</h1>
      </div>
    </Link>
  );
};

export default Posts;
