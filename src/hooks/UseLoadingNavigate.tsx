import { NavigateFunction } from 'react-router';

const useLoadingNavigate = (
  path: string,
  navigate: NavigateFunction,
  setIsLoading: Function
) => {
  path = path.toLowerCase();
  console.log(path);
  setIsLoading(true);
  setTimeout(() => {
    navigate(path);
  }, 400);
  setTimeout(() => {
    setIsLoading(false);
  }, 800);
};

export default useLoadingNavigate;
