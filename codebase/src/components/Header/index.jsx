import React from 'react';
import { IMAGES } from '../../utils/constants';

const Header = () => {
  return (
    <header className="absolute top-0 z-30 flex h-[5rem] w-full max-w-[screen] items-center justify-start bg-opacity-10 bg-gradient-to-b from-black/70 to-transparent px-4 py-4 lg:px-10">
      <div className="flex h-8 w-40 items-center rounded-full bg-white/90 px-4">
        <img src={IMAGES.LOGO} className=" w-40 object-cover " />
      </div>
    </header>
  );
};

export default Header;
