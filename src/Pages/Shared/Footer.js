import React from 'react';
import "../../Styles.css/Footer.css"
import brand from "../../Asset/Banner/a885abbb-512d-43f8-8e95-c0cfdab10545.png"
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mb-8">
          <div className="footer-fast">
            <Link to="" class="flex items-center">
              <img src={brand} alt="" className="w-16 h-16 mr-1" />
              <h1 className="brand-heading footer-brand">ENERGY</h1>
            </Link>
            <p className="footer-title text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
            <div className="footer-icon">

            </div>
          </div>
          <div className="footer-second">
            <h1 className="footer-heading">Contact Us</h1>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fcca03" className="w-6 h-6 mr-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <h1 className="text-white">1116 15th St, Sacramento, USA</h1>
            </div>
            <div className="flex items-center my-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fcca03" class="w-6 h-6 mr-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <h1 className="text-white">
                0800 123 4567
                <h1>0800 123 4566</h1>
              </h1>
            </div>
            <div className="flex items-center ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fcca03" class="w-6 h-6 mr-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <h1 className="text-white">
                energy@support.com
                <h1> energy@info.com</h1>
              </h1>
            </div>
          </div>
          <div className="footer-third">
            <h1 className="footer-heading">Links</h1>
            <div className="flex flex-col">
              <Link to="/" className="footer-anchor">Home</Link>
              <Link to="/" className="footer-anchor">Blogs</Link>
              <Link to="/" className="footer-anchor">My Portfolio</Link>
              <Link to="/" className="footer-anchor">Services</Link>
            </div>
          </div>
        </div>
      </div>
      <hr className="footer-hr" />
      <div className="container mx-auto pt-6">
        <div className="md:flex md:justify-evenly md:items-center">
          <Link to="" class="flex items-center md:order-2 order-1">
            <img src={brand} alt="" className="w-16 h-16 mr-1" />
            <h1 className="brand-heading footer-brand">ENERGY</h1>
          </Link>
          <h6 className="copyright-heading md:order-1 order-2">© Copyright 2022. All right reserved.</h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;