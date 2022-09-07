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
import ManageOrder from './Pages/Dashboard/ManageOrder';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import MyOrder from './Pages/Dashboard/MyOrder';
import MyProfile from './Pages/Dashboard/MyProfile';
import Home from './Pages/Home/Home';
import Blogs from './Pages/Home/Blogs';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';
import ToolsDetails from './Pages/ToolsDetails/ToolsDetails';
import BlogsDetails from './Pages/Home/BlogsDetails';
import Payment from './Pages/Dashboard/Payment';
import RequireAuth from './Pages/Shared/RequireAuth';
import RequireAdmin from './Pages/Shared/RequireAdmin';
import Notfound from './Pages/Shared/Notfound';

function App() {
  const [user] = useAuthState(auth)
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tools/:id" element={<RequireAuth><ToolsDetails /></RequireAuth>}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/blog/:id" element={<BlogsDetails />}></Route>
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<MyOrder />}></Route>
          <Route path="review" element={<AddReview />}></Route>
          <Route path="profile" element={<MyProfile />}></Route>
          <Route path="payment/:id" element={<Payment/>}></Route>
          <Route path="users" element={<RequireAdmin><AllUsers /></RequireAdmin>}></Route>
          <Route path="add" element={<RequireAdmin><AddProduct /></RequireAdmin>}></Route>
          <Route path="products" element={<RequireAdmin><ManageProducts /></RequireAdmin>}></Route>
          <Route path="orders" element={<RequireAdmin><ManageOrder /></RequireAdmin>}></Route>
        </Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
