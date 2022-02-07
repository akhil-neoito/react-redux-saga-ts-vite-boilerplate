import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';

const useLoading = (action: string): boolean => {
  const loadingState = useSelector(
    (state: RootState) => state.loader.loadingActions
  );

  return loadingState.includes(action);
};

export default useLoading;
