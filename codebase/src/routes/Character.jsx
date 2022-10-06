import React from 'react';
import { useLocation } from 'react-router-dom';
import Banner from '../components/Banner/Banner';
import GradientBox from '../components/GradientBox';
import Loader from '../components/Loader';
import Row from '../components/Row';
import { useGetCharacterQuery } from '../features/api/characterSlice';
import { IMAGES } from '../utils/constants';

export const Character = () => {
  const { pathname } = useLocation();
  const ID = pathname.slice(11);
  const {
    data: CharacterData,
    isError,
    isLoading,
    isSucess,
  } = useGetCharacterQuery(ID);

  let content;
  if (isLoading) content = <Loader />;
  if (isError) content = 'Error';
  if (isSucess)
    content = (
      <div className="z-10 my-20 flex h-fit min-h-[20rem] w-[30rem]  flex-col justify-center rounded-2xl bg-white  p-10 text-center text-black">
        <h1 className="pb-10 text-4xl font-light ">{CharacterData?.name}</h1>
        <Row heading={'Culture'} value={CharacterData?.culture} />
        <Row heading={'Gender'} value={CharacterData?.gender} />
        <Row heading={'Death'} value={CharacterData?.died} />
        <div className="flex w-full justify-between border-t-2 border-gray-400/20 py-2">
          <p className="font-serif font-bold text-yellow-500">Title Held</p>
          <div className="flex flex-col items-end">
            {' '}
            {CharacterData.titles?.length > 0 ? (
              CharacterData.titles?.map((title) => (
                <h1 className="my-2" key={title}>
                  {title || '-'}
                </h1>
              ))
            ) : (
              <h1 className="my-2">None</h1>
            )}
          </div>
        </div>
      </div>
    );

  return (
    <div className="relative mt-0 flex h-fit min-h-screen w-full flex-col items-center justify-center">
      <Banner src={IMAGES.FIRE} />
      <GradientBox />
      {content}
    </div>
  );
};
