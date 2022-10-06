import { configureStore } from '@reduxjs/toolkit';
import { houseSlice } from './features/api/apiSlice';
import { characterSlice } from './features/api/characterSlice';

export const store = configureStore({
  reducer: {
    [houseSlice.reducerPath]: houseSlice.reducer,
    [characterSlice.reducerPath]: characterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      houseSlice.middleware,
      characterSlice.middleware
    ),
});
