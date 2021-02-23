// import logo from './logo.svg';
import './css/App.css';
import {BrowserRouter} from 'react-router-dom';
import AppStateHandler from './AppStateHandler';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={8000} />
      <BrowserRouter>
         <AppStateHandler />
      </BrowserRouter>
    </div>
  );
}

export default App;
