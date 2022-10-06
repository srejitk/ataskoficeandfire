import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const characterSlice = createApi({
  reducerPath: 'characterSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.anapioficeandfire.com/api',
  }),
  endpoints: (builder) => ({
    getCharacter: builder.query({
      query: (id) => `/characters/${id}`,
    }),
  }),
});

export const { useGetCharacterQuery } = characterSlice;
