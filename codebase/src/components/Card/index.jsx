import React from 'react';
import { FiAnchor, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Card = ({ name, culture, gender, id }) => {
  return (
    <Link
      to={`/character/${id}`}
      className="group relative m-1 flex h-[15rem] w-full min-w-[20rem] cursor-pointer flex-col items-start  rounded-lg border-2 border-transparent  p-10 px-6 text-center text-white hover:border-t-2 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/20"
    >
      <div className="absolute inset-0  rounded-md bg-opacity-30 bg-gradient-to-t from-blue-900/70 to-transparent drop-shadow-lg backdrop-blur-md"></div>
      <h1 className="z-10 text-2xl font-light decoration-white/60 decoration-1 group-hover:underline  group-hover:underline-offset-[10px]">
        {name}
      </h1>
      <div className="z-10 mt-auto flex w-full items-center justify-center gap-5">
        <FiAnchor className="h-6 w-6 rounded-full bg-orange-500/60 p-1 text-yellow-100" />
        <h1 className="flex flex-grow">
          {culture || 'The winter swept us away'}
        </h1>
      </div>

      <div className="z-10 my-4 flex w-full items-center justify-center gap-5">
        <FiUser
          className={`h-6 w-6 p-1  ${
            gender === 'Male'
              ? 'bg-blue-500/60 text-blue-100'
              : 'bg-purple-500/60 text-pink-100'
          } rounded-full`}
        />
        <h1 className="z-10 flex flex-grow">{gender}</h1>
      </div>
    </Link>
  );
};

export default Card;
