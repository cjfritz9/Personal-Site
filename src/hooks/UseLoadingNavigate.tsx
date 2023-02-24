import { NavigateFunction } from 'react-router';

const useLoadingNavigate = (
  path: string,
  navigate: NavigateFunction,
  setIsLoading: Function
) => {
  path = path.toLowerCase();
  setIsLoading(true);
  window.scrollTo({top: 0, behavior: 'smooth'})
  setTimeout(() => {
    navigate(path);
  }, 400);
  setTimeout(() => {
    setIsLoading(false);
  }, 800);
};

export default useLoadingNavigate;
