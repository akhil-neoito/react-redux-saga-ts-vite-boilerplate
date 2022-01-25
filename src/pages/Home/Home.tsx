import { useState } from 'react';
import Button from '../../components/Button';

const Home = () => {
  const [count, setCount] = useState(0);

  const login = () => {
    console.log('login');
  };

  return (
    <div>
      <div>Count: {count}</div>
      <Button text="Increment" onClick={() => setCount(count + 1)} />
      <Button text="Login" onClick={login} />
    </div>
  );
};

export default Home;
