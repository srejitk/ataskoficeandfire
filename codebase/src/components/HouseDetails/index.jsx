import React, { useEffect, useState } from 'react';
import { FiArrowLeftCircle } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import { useGetHouseQuery } from '../../features/api/apiSLice';
import { IMAGES } from '../../utils/constants';
import Banner from '../Banner/Banner';
import CharacterCard from '../CharacterCard';
import GradientBox from '../GradientBox';
import Loader from '../Loader';

const HouseDetails = () => {
  const { pathname } = useLocation();
  const [characters, setCharacters] = useState([]);
  const ID = pathname.slice(1);
  const {
    data: HouseDetails,
    isLoading,
    isSuccess,
    isError,
  } = useGetHouseQuery(ID);
  let content;

  useEffect(() => {
    if (HouseDetails) {
      const { swornMembers } = HouseDetails;
      const charCodes = swornMembers.map((link) => link.slice(49));
      setCharacters(charCodes);
    }
  }, [HouseDetails]);

  if (isLoading) {
    content = <Loader />;
  } else if (isSuccess) {
    content = (
      <div className="z-10 my-40 flex h-[20rem] w-[20rem] flex-col justify-center  rounded-2xl bg-white bg-blue-900/70 p-10 text-center text-white md:my-20 lg:w-[30rem]">
        <h1 className="text-2xl font-semibold ">{HouseDetails?.name}</h1>
        <h1 className="my-4 text-3xl font-light">
          &ldquo;{HouseDetails?.words || 'The winter swept us away'}.&rdquo;
        </h1>
        <h1>{HouseDetails?.region || 'Lost to the ages'}</h1>
      </div>
    );
  } else if (isError) {
    content = (
      <div className=" text-3xl font-medium  text-red-600">ERRORRR</div>
    );
  }

  return (
    <div className="relative flex h-fit min-h-screen w-full flex-col items-center justify-center">
      <Link
        to="/"
        className="absolute top-0 left-10 z-30 mt-20  flex cursor-pointer items-center justify-between gap-5 rounded-full border-2 border-transparent bg-blue-900/10 px-4 py-1 text-xl text-black hover:animate-pulse hover:border-blue-900/80"
      >
        <FiArrowLeftCircle className="fill-blue-500/20 text-blue-900/70" />
        <p className="text-blue-900/90">Back</p>
      </Link>
      <Banner src={IMAGES.ICE} />
      <GradientBox />

      {content}
      {characters.length > 0 && (
        <div className="z-10 flex w-full  flex-col items-start lg:px-10">
          <h1 className="w-full text-center text-4xl font-light tracking-[-1.2px] text-white md:text-left">
            Sworned Members
          </h1>
          <div className="flex h-fit flex-wrap justify-center justify-items-center gap-2 py-10 lg:justify-start">
            {characters.map((id) => (
              <CharacterCard key={id} id={id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HouseDetails;
