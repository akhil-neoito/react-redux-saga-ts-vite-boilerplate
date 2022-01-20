import { useState } from 'react';
import './App.css'
import Button from './components/Button';
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App font-mono">
      <Header />
      <Button text="Increment" onClick={() => setCount(count + 1)} />
    </div>
  );
}

export default App;
