import React,{useState} from 'react'

const Aform = () => {

    const [name, setname] = useState();
    const [fullname, setfullname] = useState();

    function inputEvent(event) {
        // console.log(event.target.value);
        setname(event.target.value)
    }

    function onSub() {
        setfullname(name)
    }

  return (
      <>
          
          <h1>hello form is here {fullname}</h1>
          
          <input type="text" name="" id="" value={name} onChange={inputEvent}/>
          <br /><br />
          <button onClick={onSub}>submit now</button>
      
    </>
  )
}

export default Aform
