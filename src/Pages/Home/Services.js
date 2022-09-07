import React from 'react';
import image from "../../Asset/Portfolio/services.png"
import { Icon } from '@iconify/react';
import "../../Styles.css/Services.css"
const Services = () => {
  return (
    <div className="container lg:px-10 px-5 mx-auto">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
        <div>
          <div className="service-heding mb-4">
            <h4>FROM IDEA TO REALIZATION</h4>
            <h1>SERVICES WE PROVIDE</h1>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
            <div className="service-content shadow-md">
              <Icon icon="heroicons-outline:light-bulb" className="service-icon" />
              <h1>Development ideas</h1>
            </div>
            <div className="service-content shadow-md">
              <Icon icon="bi:wrench-adjustable" className="service-icon" />
              <h1>Technical development</h1>
            </div>
            <div className="service-content shadow-md">
              <Icon icon="healthicons:megaphone-outline"  className="service-icon" />
              <h1>Projects advertising</h1>
            </div>
            <div className="service-content shadow-md">
              <Icon icon="fluent:glasses-48-regular" className="service-icon" />
              <h1>Technical support</h1>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center" >
          <img src={image} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default Services;