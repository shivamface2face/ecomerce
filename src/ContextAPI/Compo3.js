import React from 'react'
import { fname } from './Capp';
import { lname } from './Capp';
const Compo3 = () => {
  return (
    <>
      <fname.Consumer>

        {
          (fname) => {
            return  <h2>hello {fname} is here</h2>
          }
        }

      </fname.Consumer>

         
          
    </>
  )
}

export default Compo3