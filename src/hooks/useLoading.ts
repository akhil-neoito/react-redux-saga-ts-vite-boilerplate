import { useAppSelector } from './redux';

const useLoading = (action: string): boolean => {
  const loadingState = useAppSelector((state) => state.loader.loadingActions);

  return loadingState.includes(action);
};

export default useLoading;
