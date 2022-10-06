import React from 'react';

const Row = ({ heading, value = 'NA' }) => {
  return (
    <div className="flex w-full justify-between border-t-2 border-gray-400/20 py-2">
      <p className="font-serif font-bold text-yellow-500">{heading}</p>
      <h1>{value || 'NA'}</h1>
    </div>
  );
};

export default Row;
