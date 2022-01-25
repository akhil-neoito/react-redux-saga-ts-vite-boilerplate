import type { ReactElement } from 'react';
import { Navigate } from 'react-router';

interface Props {
  children: ReactElement;
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const isAuth = true;
  
  return isAuth ? children : <Navigate to="/" />;
};

export default PrivateRoute;
