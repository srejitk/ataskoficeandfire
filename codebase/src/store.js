import { configureStore } from '@reduxjs/toolkit';
import { houseSlice } from './features/api/apiSlice';

export const store = configureStore({
  reducer: {
    [houseSlice.reducerPath]: houseSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(houseSlice.middleware),
});
