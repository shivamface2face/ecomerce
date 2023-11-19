import React,{useState} from 'react'

const Cap = () => {

   let cctime = new Date().toLocaleTimeString();
    const [ctime, setctime] = useState(cctime);

    function getTime() {
         cctime = new Date().toLocaleDateString();
        setctime(ctime);
    }

  return (
      <div>
          
          <h1>{ctime}</h1>
          <button onClick={getTime}>click here</button>
      
    </div>
  )
}

export default Cap
