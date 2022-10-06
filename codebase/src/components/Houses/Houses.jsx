import React from 'react';
import { useGetHousesQuery } from '../../features/api/apiSlice';
import { IMAGES } from '../../utils/constants';
import Banner from '../Banner/Banner';
import GradientBox from '../GradientBox';
import Loader from '../Loader';
import Posts from '../Posts';

export const Houses = () => {
  const { data, isLoading, isSuccess } = useGetHousesQuery();
  let content;

  if (isLoading) content = <Loader />;
  if (isSuccess)
    content = (
      <div className="z-10 flex w-full  flex-col items-start px-10 pt-10">
        <div className="z-10 my-20 mx-auto flex h-[20rem] w-full  flex-col justify-center rounded-2xl p-10 text-center text-white">
          <h1 className="fill-orange-700 font-serif text-9xl font-thin text-white ">
            A WORLD<br></br> OF <br></br>
            <span className="text-clip bg-gradient-to-t from-blue-400 to-white bg-clip-text font-light text-transparent">
              ICE
            </span>{' '}
            &
            <span className="text-clip bg-gradient-to-t from-yellow-400 to-orange-700 bg-clip-text font-light text-transparent">
              FIRE
            </span>
          </h1>
        </div>
        <h1 className="text-4xl font-light tracking-[-1.2px] text-white">
          Houses
        </h1>
        <div className=" grid h-fit w-full grid-cols-[repeat(3,minmax(20rem,1fr))] grid-rows-[repeat(3,minmax(15rem,1fr))] justify-start gap-4  py-10">
          {data?.map((house) => (
            <Posts key={house.id} house={house} />
          ))}
        </div>
      </div>
    );
  return (
    <div className="relative flex h-fit min-h-screen w-full flex-col items-center justify-center">
      <Banner src={IMAGES.FIRE_AND_ICE} />
      <GradientBox />
      {content}
    </div>
  );
};
