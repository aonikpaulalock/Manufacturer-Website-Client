import React from 'react'
import banner from "../../Asset/Banner/banner.png"
import "../../Styles.css/Banner.css"
const Banner = () => {
  return (
    <div className="banner-container">
      <div className="container mx-auto md:px-10 px-5">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="banner-content lg:order-1 order-2">
            <div>
              <h6>CLEAN SAFE RENEWABLE</h6>
              <h1>ENERGY AS CLEAN AS THE WIND</h1>
              <p>Nulla eget ipsum id est accumsan pellentesque nec et odio. Duis sit amet convallis sem, tincidunt feugiat lorem. Nunc porttitor arcu ac dui aliquam efficitur</p>
              <button className="discovered-button">Discover Now</button>
            </div>
          </div>
          <div className="banner-image lg:order-2 order-1">
            <img src={banner} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;