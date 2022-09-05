import { useAuthState } from 'react-firebase-hooks/auth';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import auth from './Firebase.init';
import AddProduct from './Pages/Dashboard/AddProduct';
import AddReview from './Pages/Dashboard/AddReview';
import AllUsers from './Pages/Dashboard/AllUsers';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder';
import MyProfile from './Pages/Dashboard/MyProfile';
import Home from './Pages/Home/Home';
import MyPortfolio from './Pages/Home/MyPortfolio';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';
import ToolsDetails from './Pages/ToolsDetails/ToolsDetails';

function App() {
  const [user] = useAuthState(auth)
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tools/:id" element={<ToolsDetails />}></Route>
        <Route path="/portfolio" element={<MyPortfolio />}></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<MyOrder />}></Route>
          <Route path="review" element={<AddReview />}></Route>
          <Route path="profile" element={<MyProfile />}></Route>
          <Route path="users" element={<AllUsers />}></Route>
          <Route path="add" element={<AddProduct />}></Route>
        </Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
