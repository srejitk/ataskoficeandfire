import React from 'react';
import { FiArrowLeftCircle } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import { useGetCharacterQuery } from '../../features/api/characterSlice';
import { IMAGES } from '../../utils/constants';
import Banner from '../Banner/Banner';
import ErrorText from '../ErrorText';
import GradientBox from '../GradientBox';
import Loader from '../Loader';
import Row from '../Row';
import TitleCard from '../TitleCard';

export const CharacterData = () => {
  const { pathname } = useLocation();
  const ID = pathname.slice(11);
  const {
    data: CharacterData,
    isError,
    isLoading,
    isSuccess,
  } = useGetCharacterQuery(ID);

  let content;
  if (isLoading) content = <Loader />;
  if (isError) content = <ErrorText />;
  if (isSuccess)
    content = (
      <div className="z-10 my-40 flex h-fit min-h-[20rem] w-[20rem] flex-col justify-center  rounded-2xl bg-white bg-blue-900/70 p-10 text-center text-white drop-shadow-lg lg:my-20 lg:w-[30rem]">
        <h1 className="pb-10 text-4xl font-light ">{CharacterData?.name}</h1>
        <Row heading={'Culture'} value={CharacterData?.culture} />
        <Row heading={'Gender'} value={CharacterData?.gender} />
        <Row heading={'Death'} value={CharacterData?.died} />
      </div>
    );

  return (
    <div className="relative mt-0 flex h-fit min-h-screen w-full flex-col items-center justify-center">
      <Link
        to="/"
        className="absolute top-0 left-10 z-30 mt-20  flex cursor-pointer items-center justify-between gap-5 rounded-full border-2 border-transparent bg-blue-900/10 px-4 py-1 text-xl text-black hover:animate-pulse hover:border-blue-900/80"
      >
        <FiArrowLeftCircle className="fill-blue-500/20 text-blue-900/70" />
        <p className="text-blue-900/90">Home</p>
      </Link>
      <Banner src={IMAGES.ICE} />
      <GradientBox />
      {content}
      {CharacterData?.titles?.length > 0 && isSuccess && (
        <div className="z-10 mt-auto flex w-full  flex-col items-start px-10">
          <h1 className="text-4xl font-light tracking-[-1.2px] text-white">
            {CharacterData?.titles?.length === 0 ? '' : 'Titles Held'}
          </h1>
          <div className="flex h-fit flex-wrap justify-start justify-items-center gap-2 py-10">
            {CharacterData.titles?.map((title) => (
              <TitleCard key={title}>{title}</TitleCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
