import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authSlice from '../../redux/slices/auth.slice';

const Articles = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authSlice.actions.login());
  }, []);

  return <p>Articles</p>;
};

export default Articles;
