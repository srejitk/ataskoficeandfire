import React from 'react';

const Header = () => {
  return (
    <header className="absolute top-0 z-30 flex h-[5rem] w-full max-w-[screen] items-center justify-start bg-opacity-10 bg-gradient-to-b from-black/70 to-transparent px-10 py-4">
      <h1 className="text-md font-thin text-white">Game Of Thrones</h1>
    </header>
  );
};

export default Header;
