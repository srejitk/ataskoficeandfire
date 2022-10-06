import React from 'react';

import { useGetCharacterQuery } from '../../features/api/characterSlice';
import Card from '../Card';
import Skeleton from '../Skeleton';

const CharacterCard = ({ id }) => {
  const {
    data: CharacterDetails,
    isLoading,
    isSuccess,
    isError,
  } = useGetCharacterQuery(id);

  let content;

  if (isLoading) content = <Skeleton />;

  if (isError) content = <div>Error</div>;

  if (isSuccess)
    content = (
      <Card
        name={CharacterDetails?.name}
        culture={CharacterDetails?.culture}
        gender={CharacterDetails?.gender}
        id={id}
      />
    );

  return <div>{content}</div>;
};

export default CharacterCard;
