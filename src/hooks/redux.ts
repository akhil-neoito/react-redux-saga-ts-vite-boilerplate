import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../redux/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();

// Type safe version of useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
