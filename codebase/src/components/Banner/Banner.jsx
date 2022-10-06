import React from 'react';

const Banner = ({ src }) => {
  return (
    <div>
      <img
        src={src}
        className="fixed inset-0 h-screen w-screen bg-red-500 object-cover"
      />
    </div>
  );
};

export default Banner;
