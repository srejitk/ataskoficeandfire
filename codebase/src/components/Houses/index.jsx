import React, { useState, useRef } from 'react';
import { IMAGES } from '../../utils/constants';
import Banner from '../Banner/Banner';
import GradientBox from '../GradientBox';
import Loader from '../Loader';
import Posts from '../Posts';
import { useInfiniteScrolling } from '../../utils/useInfiniteScrolling';
import { FiArrowUpCircle } from 'react-icons/fi';
import ErrorText from '../ErrorText';

export const Houses = () => {
  const loadingRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const { isLoading, isSuccess, data, isError } = useInfiniteScrolling(
    currentPage,
    setCurrentPage,
    loadingRef
  );

  const clickToScrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: 'smooth',
    });
  };

  let content;

  if (isLoading) content = <Loader />;
  if (isError) content = <ErrorText />;
  if (isSuccess)
    content = (
      <div className="relative z-10 flex w-full  flex-col items-start px-10 pt-10">
        {window.scrollY > 1000 && (
          <button
            onClick={(e) => clickToScrollUp(e)}
            className="fixed bottom-10 right-10 z-40 mt-20  flex cursor-pointer items-center justify-between gap-5 rounded-full border-2 border-transparent bg-blue-900/90 px-4 py-1 text-xl text-white hover:animate-pulse hover:border-blue-900/80"
          >
            <FiArrowUpCircle className=" text-white" />
            <p className="text-white">Scroll Up</p>
          </button>
        )}
        <div className="z-10 my-20 mx-auto flex h-[20rem] w-full  flex-col justify-center rounded-2xl p-10 text-center text-white">
          <h1 className="fill-orange-700 font-serif text-7xl font-thin text-white md:text-9xl ">
            A WORLD<span className="block">OF</span>
            <span className="text-clip bg-gradient-to-t from-blue-400 to-white bg-clip-text font-light text-transparent">
              ICE
            </span>{' '}
            &
            <span className="text-clip bg-gradient-to-t from-yellow-400 to-orange-700 bg-clip-text font-light text-transparent">
              FIRE
            </span>
          </h1>
        </div>
        <h1 className="w-full text-center text-4xl font-light tracking-[-1.2px] text-white md:text-left">
          Houses
        </h1>
        <div className=" grid h-fit w-full justify-center gap-4 py-10 lg:grid-cols-[repeat(4,minmax(20rem,1fr))] lg:grid-rows-[repeat(4,minmax(15rem,1fr))]  lg:justify-start">
          {data?.map((house) => {
            return <Posts key={house.url} house={house} />;
          })}
        </div>
      </div>
    );
  return (
    <div className="relative flex h-fit min-h-screen w-full flex-col items-center justify-center">
      <Banner src={IMAGES.FIRE_AND_ICE} />

      <GradientBox />

      {content}

      <div ref={loadingRef}>
        <div className="h-10 w-10 animate-pulse rounded-full bg-white"></div>
      </div>
    </div>
  );
};
