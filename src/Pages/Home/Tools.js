import React, { useEffect, useState } from 'react';
// import useTools from '../../Hooks/useTools';
import Tool from './Tool';

const Tools = () => {
  // const [tools] = useTools()
  const [tools, setTools] = useState([])
  useEffect(() => {
    fetch("http://localhost:4000/tools")
      .then(res => res.json())
      .then(data => {
        setTools(data)
      })
  }, [])
  return (
    <div className="container mx-auto px-10 my-16 py-14">
      <div className="parts-heading my-3">
        <h1>Eco Friendly Parts</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ab ad neque! Eaque, officiis tempora.</p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {
          tools.slice(0, 6).map(tool => <Tool
            key={tool._id}
            tools={tool}
          >
          </Tool>)
        }
      </div>
    </div>
  );
};

export default Tools;