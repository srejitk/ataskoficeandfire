import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const houseSlice = createApi({
  reducerPath: 'houseSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.anapioficeandfire.com/api',
  }),
  endpoints: (builder) => ({
    getHouses: builder.query({
      query: () => '/houses?page=1&pageSize=50',
      transformResponse: (responseData) => {
        let loadedPosts = responseData.map((house) => {
          let id = house.url.slice(45);
          house.id = id;
          return house;
        });

        loadedPosts = loadedPosts.filter(
          (house) => house.words !== '' || house.swornMembers.length !== 0
        );
        return loadedPosts;
      },
    }),
    getHouse: builder.query({
      query: (id) => `/houses/${id}`,
    }),
  }),
});

export const { useGetHousesQuery, useGetHouseQuery } = houseSlice;
