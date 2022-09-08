import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Tool from './Tool';

const Tools = () => {
  const [tools, setTools] = useState([])
  const { data, isLoading } = useQuery('/tools', () =>
    axios.get("https://manu-project-server.vercel.app/tools").then(response => {
      setTools(response.data)
    })
  )
  if (isLoading) {
    return <Loading />
  }
  return (
    <div className="container mx-auto md:px-10 px-5 md:my-16 my-8 md:py-14 py-8">
    <div className="reviews-content my-6">
        <h5>FEATURE OF</h5>
        <h2>OUR TOOLS</h2>
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