import React from 'react';
import brand from "../../Asset/Banner/a885abbb-512d-43f8-8e95-c0cfdab10545.png"
const Loading = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div class="">
        <img src={brand} alt="" className="w-25 h-25 mx-auto animate-spin" />
      </div>
    </div>
  );
};

export default Loading;