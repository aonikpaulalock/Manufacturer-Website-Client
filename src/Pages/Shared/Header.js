import { signOut } from 'firebase/auth';
import React from 'react';
import brand from "../../Asset/Banner/a885abbb-512d-43f8-8e95-c0cfdab10545.png"
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation } from 'react-router-dom';
import "../../Styles.css/Header.css"
import { Icon } from '@iconify/react';
import auth from '../../Firebase.init';
const Header = () => {
  const { pathname } = useLocation()
  const [user] = useAuthState(auth)
  const logout = () => {
    signOut(auth)
    localStorage.removeItem("accessToken")
  }
  const navMenu =
    <>
      <li><Link to="/" className="anchor-links">Home</Link></li>
      <li><Link to="/blogs" className="anchor-links">Blogs</Link></li>
      {
        !user ?
          <li><Link to="/signup" className="anchor-links">Signup</Link></li>
          :
          <>
            <li><Link to="/dashboard" className="anchor-links">Dashboard</Link></li>
            <>
              <li>
                <Link to="/signup" className="anchor-links" onClick={logout}>
                <Icon icon="icon-park-outline:logout" className="logout" />
                </Link>
              </li>
            </>
          </>
      }
    </>

  return (
    <div className="container mx-auto md:px-10 px-2 py-2a">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="#fcca03"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow-2xl  rounded-box w-52 bg-white">
              {navMenu}
            </ul>
          </div>
          <Link to="" className="flex items-center">
            <img src={brand} alt="" className="w-16 h-16 mr-1" />
            <h1 className="brand-heading ">ENERGY</h1>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal">
            {navMenu}
          </ul>
        </div>
        {
          pathname.includes("dashboard") &&
          <div className=''>
            <label tabIndex="0" className=" drawer-button md:hidden ml-32" for="my-drawer-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="#fcca03"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
          </div>
        }
      </div>
    </div>
  );
};

export default Header;