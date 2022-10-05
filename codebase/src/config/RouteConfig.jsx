import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Character } from '../routes/Character';
import { Home } from '../routes/Home';
import { House } from '../routes/House';
export const RouteConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/house" element={<House />} />
      <Route path="/character" element={<Character />} />
    </Routes>
  );
};
