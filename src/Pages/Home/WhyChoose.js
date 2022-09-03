import React from 'react';
import "../../Styles.css/WhyChoose.css"
const abouts = [
  { id: 1, name: "Newest Technologies", img: "https://i.ibb.co/PxCvGPC/signal.png", des: "Aenean malesuada mauris sed odio posu eleifend. Sed vehicula quam." },
  { id: 2, name: "Take Care of Nature", img: "https://i.ibb.co/RbbXNLh/nature.png", des: "Aenean malesuada mauris sed odio posu eleifend. Sed vehicula quam." },
  { id: 3, name: "Power And Energy", img: "https://i.ibb.co/wKFhxMH/energy.png", des: "Aenean malesuada mauris sed odio posu eleifend. Sed vehicula quam." },
  { id: 4, name: "Green Energy", img: "https://i.ibb.co/3pB5MF1/green.png", des: "Aenean malesuada mauris sed odio posu eleifend. Sed vehicula quam." }
]

const WhyChoose = () => {
  return (
    <div className="container mx-auto px-10 my-14">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
        <div className="why-choose-content">
          <div>
            <h1>WHY CHOOSE US</h1>
            <h6>WE OOFER DIFERENT SERVICES</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus erat in tincidunt consequat. Phasellus sit amet convallis turpis, id molestie nunc.</p>
            <button className="discovered-button">Read More</button>
          </div>
        </div>
        <div className="why-choose-grid grid lg:grid-cols-2 sm:grid-cols-2 gap-6">
          {
            abouts.map(about =>
              <div key={about.id} className="p-3 hover:shadow-lg cursor-pointer">
                <div>
                  <img src={about.img} alt="" className="p-4" />
                </div>
                <div className="about-content">
                  <h1>{about.name}</h1>
                  <p>{about.des}</p>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;