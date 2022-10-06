import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HouseDetails from '../components/HouseDetails';
import { Character } from '../routes/Character';
import { Home } from '../routes/Home';
export const RouteConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<HouseDetails />} />
      <Route path="/character" element={<Character />} />
    </Routes>
  );
};
