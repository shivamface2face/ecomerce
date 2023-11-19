import React,{useState} from 'react'

const Eapp = () => {

  const purple = "#A020F0";
  const [bg, setbg] = useState(purple);
  
    function bgChange() {
      console.log("clickeds");
      let newbg = "#FF0000";
      setbg(newbg);
      
    }

  return (
      <>
          <div style={{backgroundColor:bg}}>
              
          <h1>event handel</h1>
          <button onClick={bgChange}>click me</button>
              

          </div>
          
      
    </>
  )
}

export default Eapp
