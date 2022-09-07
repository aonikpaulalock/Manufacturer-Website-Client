import React from 'react';
import "../../Styles.css/Summery.css"
const summerys = [
  { id: 1, name: "FINISHED PROJECTS", number: "2477" },
  { id: 2, name: "HAPPY CLIENTS", number: "832" },
  { id: 3, name: "WORKING HOURS", number: "1858" },
  { id: 4, name: "SATISFIED EMPLOYEES", number: "10035" },
  { id: 5, name: "OFFICES WORLDWIDE", number: "1858" },
]
const Summery = () => {
  return (
    <div className="summery-container my-12 pb-8">
      <div className="container mx-auto md:px-10 px-4">
        <div className="summery-heading mb-8">
          <h1>Summery</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, totam?</p>
        </div>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {
            summerys.map(summery =>
              <div key={summery.id} className="summery-content">
                <h1>{summery.number}</h1>
                <h6>{summery.name}</h6>
              </div>
            )
          }
        </div> F
      </div>
    </div>
  );
};

export default Summery;