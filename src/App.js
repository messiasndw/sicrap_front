import './App.css';
import Routes from './routes/index'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AlertDialogContainer from '@components/AlertDialog'

function App() {

  return (
    <div className="App">
        <Routes />
          <ToastContainer />
        <AlertDialogContainer />
    </div>
  );
}

export default App;
