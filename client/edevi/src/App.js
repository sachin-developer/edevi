// import logo from './logo.svg';
import './css/App.css';
import {BrowserRouter} from 'react-router-dom';
import AppStateHandler from './AppStateHandler';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <AppStateHandler />
      </BrowserRouter>
    </div>
  );
}

export default App;
