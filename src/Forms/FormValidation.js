import { Formik } from 'formik';
import React from 'react';





const FormValidation = () => {



    function onSubmit(e) {
        // e.preventDefault();
    }
  return (
      <>
          <form action="" onSubmit={onSubmit}>
              <label htmlFor="">Name</label>
              <input type="text" name="name" id="" />
              <label htmlFor="">Email</label>
              <input type="email" name="email" id="" />
              <label htmlFor="">Password</label>
              <input type="password" name="password" id="" />
              <label htmlFor=""> Confirm Password</label>
              <input type="text" name="" id="cpassword" />
              

         </form> 

      
    </>
  )
}

export default FormValidation
