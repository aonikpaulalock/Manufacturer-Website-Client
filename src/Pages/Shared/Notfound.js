import React from 'react';
import { useNavigate } from 'react-router-dom';
import notfound from "../../Asset/Notfound/Notfound.png"
import "../../Styles.css/Notfound.css"
const Notfound = () => {
  const navigate = useNavigate()
  return (
    <div className="container md:px-12 px-2 mx-auto md:py-24 py-8">
      <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-8 gap-3">
        <div className="notfound-content md:pt-12 pt-1 order-2 md:order-1">
          <h1 className="">OOPS PAGE ARE <span>NOT FOUND ?</span></h1>
          <p className="">Sorry but the page you are looking for does not exit, have been removed or name changed. Go back Homepage or enter the key words to search, please !</p>
          <button className="discovered-button" onClick={() => navigate("/")}>Back to home</button>
        </div>
        <div className="order-1 md:order-2">
          <img src={notfound} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Notfound;