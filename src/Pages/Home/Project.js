import React from 'react';
import project1 from "../../Asset/Project/project-1.jpg"
import project2 from "../../Asset/Project/project-2.jpg"
import project3 from "../../Asset/Project/project-3.jpg"
import project4 from "../../Asset/Project/project-4.jpg"
import "../../Styles.css/Project.css"
const Project = () => {
  return (
    <div className="project-container py-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
          <div className="project-grid grid lg:grid-cols-2 sm:grid-cols-2 gap-6">
            <img src={project1} alt="" />
            <img src={project2} alt="" />
            <img src={project3} alt="" />
            <img src={project4} alt="" />
          </div>
          <div className="project-content">
            <div>
              <h1>WE DO AWESOME WORKS, SOME OF OUR PROJECT HERE</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus erat in tincidunt consequat. Phasellus sit amet convallis turpis, id molestie nunc</p>
              <button className="discovered-button project-button">See All Project</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;