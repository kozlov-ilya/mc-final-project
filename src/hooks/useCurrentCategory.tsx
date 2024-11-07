import { useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DEFAULT_CATEGORY } from 'configs/consts';
import { TCategory } from 'types';

export const useCurrentCategory = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentCategory = searchParams.get('category') || DEFAULT_CATEGORY.category;

  const setCurrentCategory = useCallback(
    (category: TCategory) => {
      setSearchParams({ category: category });
    },
    [setSearchParams],
  );

  useEffect(() => {
    if (!searchParams.get('category')) {
      setSearchParams({ category: DEFAULT_CATEGORY.category });
    }
  }, [searchParams, setSearchParams]);

  return { currentCategory, setCurrentCategory };
};
