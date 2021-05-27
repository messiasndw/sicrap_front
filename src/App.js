import './App.css';
import Routes from './routes/index'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="App">
      <Routes/>
      <ToastContainer />
    </div>
  );
}

export default App;
