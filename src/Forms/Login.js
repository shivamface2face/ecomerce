import React, { useState } from "react";

const Login = () => {
    const [name, setname] = useState();
    const [lastname, setlanme] = useState();
    const [fullname, setfullname] = useState();
    const [lname, setlname] = useState();

  function inputEvent(event) {
    // console.log(event.target.value);
      setname(event.target.value);
      
    }
    
    function inputEventTwo(e) {
        setlname(e.target.value);
    }

  function onSubmit(e) {
      setfullname(name);
      setlanme(fullname);
    e.preventDefault();
  }

  return (
    <>
      <form onSubmit={onSubmit}>
              <h1>hello form is here {fullname} { lname}</h1>

        <input type="text" name="" id="" value={name} onChange={inputEvent} />
        <br />
              <br />

              <input type="text" name="" id="" value={lastname} onChange={inputEventTwo} />

              <br />
              <br />
              

        <button type="submit">submit now</button>
      </form>
    </>
  );
};

export default Login;
