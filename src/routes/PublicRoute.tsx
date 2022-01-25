import type { ReactElement } from 'react';
import { Navigate } from 'react-router';

interface Props {
  children: ReactElement;
}

const PublicRoute: React.FC<Props> = ({ children }) => {
  const isAuth = true;
  
  return isAuth ? <Navigate to="/articles" /> : children;
};

export default PublicRoute;