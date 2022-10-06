import { useState } from 'react';
import { useCallback, useEffect } from 'react';
import axios from 'axios';

export const useInfiniteScrolling = (
  currentPage,
  setCurrentPage,
  loadingRef
) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const combinedData = useCallback(async () => {
    if (currentPage > 0) {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `https://www.anapioficeandfire.com/api/houses?page=${currentPage}`
        );

        setData((prev) => [...prev, ...data]);
        setIsSuccess(true);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  }, [currentPage]);

  useEffect(() => {
    combinedData();
  }, [combinedData]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCurrentPage((page) => page + 1);
        }
      },
      { threshold: 0.5 }
    );
    if (loadingRef.current) observer.observe(loadingRef.current);
    return () => {
      if (observer.current) {
        observer.unobserve(observer.current);
      }
    };
  }, [loadingRef]);

  return { data, isLoading, isError, isSuccess };
};
