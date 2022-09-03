import { Route, Routes } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';
import ToolsDetails from './Pages/ToolsDetails/ToolsDetails';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/tools/:id" element={<ToolsDetails/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
      <Footer/>
      <ToastContainer/>
    </div>
  );
}

export default App;
