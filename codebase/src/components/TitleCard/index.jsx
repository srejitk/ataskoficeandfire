import React from 'react';

const TitleCard = ({ children }) => {
  return (
    <div className="group relative m-1 flex h-[10rem] w-full min-w-[20rem] max-w-[30rem] cursor-pointer flex-col items-start  rounded-lg border-2 border-transparent  p-10 px-6 text-center text-white hover:border-t-2 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/20">
      <div className="absolute inset-0  rounded-md bg-opacity-30 bg-gradient-to-t from-blue-900/70 to-transparent drop-shadow-lg backdrop-blur-sm"></div>
      <h1 className="z-10 text-2xl font-light decoration-white/60 decoration-1 group-hover:underline  group-hover:underline-offset-[10px]">
        {children}
      </h1>
    </div>
  );
};

export default TitleCard;
