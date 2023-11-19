import React,{useState} from 'react'

const Complex = () => {

    const [fullname, setfullname] = useState({
        fname: "",
        lname:""
    });
  

  function inputEvent(event) {
   
    console(event.target.value);
      
    }
    
    function onSubmit(e) {
  
      e.preventDefault();
      alert("form done");
    }

  setfullname((prev) => {
   

    
    })
    

  return (
      <>
          
          <form onSubmit={onSubmit}>
              <h1>hello form is here {fullname.fname}{fullname.lname}</h1>

        <input type="text" name="" id=""  name="fname" onChange={inputEvent} />
        <br />
              <br />

              <input type="text" name="" id=""   name="lname" onChange={inputEvent} />

              <br />
              <br />
              

        <button type="submit">submit now</button>
          </form>
          
      
    </>
  )
}

export default Complex


// value={fullname.lname}