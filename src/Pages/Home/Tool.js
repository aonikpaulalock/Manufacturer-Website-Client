import React from 'react';
import "../../Styles.css/Tools.css"
const Tool = ({ tools }) => {
  console.log(tools);
  const { img, description, name, price } = tools;
  return (
    <div className="rounded shadow-lg">
      <div className="w-full p-4 ">
        <div>
          <img src={img} alt="" className="px-6" />
        </div>
        <div className="card-content">
          <h1>{name}</h1>
          <p>{description.slice(0,73)}</p>
          <div className="flex justify-between">
            <h6 className="tools-head flex items-center py-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fcca03" class="w-8 h-8 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {price}</h6>
          </div>
          <button className="discovered-button">Book now</button>
        </div>
      </div>
    </div>


  );
};

export default Tool;