import { Provider } from 'react-redux';
import Header from './components/Header';
import Router from './routes';
import store from './redux/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App font-mono h-screen">
        <Header />
        <Router />
      </div>
    </Provider>
  );
}

export default App;
