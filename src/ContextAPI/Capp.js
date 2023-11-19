import React from 'react'
import { createContext } from 'react'
import Component2 from './Component2';


const fname = createContext();
const lname = createContext();

const Capp = () => {

   

  return (
      <>
          
          <fname.Provider value={"shivam"}>  
              <lname.Provider value={"singh"}>
              <Component2 />
              </lname.Provider>
          </fname.Provider>
       

         

    </>
  )
}

export default Capp
export {fname,lname}