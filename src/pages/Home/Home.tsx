import authSlice from '../../redux/slices/auth.slice';
import Button from '../../components/Button';
import { useAppDispatch } from '../../hooks/redux';

const Home = () => {
  const dispatch = useAppDispatch();

  const login = () => {
    dispatch(authSlice.actions.login());
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <Button text="Dummy Login" onClick={login} />
    </div>
  );
};

export default Home;
