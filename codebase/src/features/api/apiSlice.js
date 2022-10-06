import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const houseSlice = createApi({
  reducerPath: 'houseSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.anapioficeandfire.com/api',
  }),
  endpoints: (builder) => ({
    getHouses: builder.query({
      query: (pageNo) => `/houses?page=${pageNo}`,
      transformResponse: (responseData) => {
        let loadedPosts = responseData.sort((a, b) => a.name - b.name);
        return loadedPosts;
      },
    }),
    getHouse: builder.query({
      query: (id) => `/houses/${id}`,
    }),
  }),
});

export const { useGetHousesQuery, useGetHouseQuery } = houseSlice;
