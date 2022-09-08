import { useEffect, useState } from "react"

const useTools = () => {
  const [tools, setTools] = useState('');
  useEffect(() => {
    fetch("https://manu-project-server.vercel.app/tools")
      .then(res => res.json())
      .then(data => setTools(data))
  }, [])
  return [tools]
}

export default useTools;