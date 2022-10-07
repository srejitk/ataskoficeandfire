# Ice and Fire API Project

This project explore the api and allows users to find the various Houses and their corresponding data.

## Tech Stack

**Client:** React, Redux Toolkit, TailwindCSS

**Server:** Redux Toolkit Query

**Tools:** ESLint, Prettier

## Features

- Responsive Design
- Infinite Scrolling
- Network Fetch Caching
- Redux Toolkit for State Management
- RTK Query for Querying

## API Reference

#### Get all Houses

```http
  GET https://www.anapioficeandfire.com/api/houses
```

#### Get Single House

```http
  GET https://www.anapioficeandfire.com/api/houses/${id}
```

| Parameter | Type     | Description               |
| :-------- | :------- | :------------------------ |
| `id`      | `string` | **Required**. Id of House |

#### Get Single Character

```http
  GET https://www.anapioficeandfire.com/api/characters/${id}
```

| Parameter | Type     | Description               |
| :-------- | :------- | :------------------------ |
| `id`      | `string` | **Required**. Id of House |

## Lessons Learned

- Got a chance to explore RTK Query, Query Mutation, Transformation and Caching.
- Learnt how to inculcate RTK Query with Redux Store.
- I had struggled with implementing Infinite Scroll, with RTK Query, since it doesn't support it natively currently.
- So had to cook up a custom implementation, which didn't pan out since it wasn't differentiating between the cached results and new results resulting in duplicate keys.
- The final approach I used was to build a custom hook useInfiniteScrolling to handle the data.

## Roadmap

- Addition of Search with Debounced network calls
- Caching the Infinite Scroll Calls
- Creating a custom work around for Infinite Scroll with RTK Query
