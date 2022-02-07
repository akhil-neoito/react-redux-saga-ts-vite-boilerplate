import authSlice from '../../redux/slices/auth.slice';
import Button from '../../components/Button';
import { useAppDispatch } from '../../hooks/redux';
import useLoading from '../../hooks/useLoading';
import { LOGIN } from '../../redux/actions/auth.actions';

const Home = () => {
  const dispatch = useAppDispatch();
  const isLoading = useLoading(LOGIN);

  const login = () => {
    dispatch(authSlice.actions.login());
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <Button text="Dummy Login" onClick={login} isLoading={isLoading} />
    </div>
  );
};

export default Home;
