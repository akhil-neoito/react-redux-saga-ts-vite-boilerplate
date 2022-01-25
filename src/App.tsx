import './App.css';
import Header from './components/Header';
import Router from './routes';

function App() {
  return (
    <div className="App font-mono h-screen">
      <Header />
      <Router />
    </div>
  );
}

export default App;
