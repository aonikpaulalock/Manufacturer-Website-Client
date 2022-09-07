import React from 'react';
import image1 from "../../Asset/Client-section/1.png"
import image2 from "../../Asset/Client-section/2.png"
import image3 from "../../Asset/Client-section/3.png"
import image4 from "../../Asset/Client-section/4.png"
const Clients = () => {
  return (
    <div className="container mx-auto md:px-10 px-5 md:my-16 my-8 md:py-16 py-8">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4 sm:mt-10 mt-4 cursor-pointer md:order-1 order-2">
              <img src={image1} alt="" className="" />
              <img src={image2} alt="" className="" />
              <img src={image3} alt="" className="" />
              <img src={image4} alt="" className="" />
          </div>
        <div className="why-choose-content md:order-2 order-1">
          <div className="">
            <h6>MAJOR AND BEST</h6>
            <h1>OUR CLIENTS</h1>
            <p>Cras feugiat nibh vel imperdiet porta. Nam ut libero scelerisque, porta ligula in, mattis neque. Duis consequat, eros eu mollis venenatis, lectus nisi sagittis lorem, a lacinia arcu lectus vitae ante. Sed tempus aliquam erat, ac euismod erat commodo vel.</p>
            <button className="discovered-button">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;