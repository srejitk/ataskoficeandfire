
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

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of House |

#### Get Single Character

```http
  GET https://www.anapioficeandfire.com/api/characters/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of House |



