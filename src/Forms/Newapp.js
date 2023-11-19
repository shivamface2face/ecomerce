import React, { useState } from "react";
// import "../node_modules\bootstrap\dist\css\bootstrap.min.css";
const Newapp = () => {

  const [subm, setsubm] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  });

  function handelChange(e) {
    const { name, value } = e.target;
    setsubm((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log(subm);
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" id="" onChange={handelChange} />
        <br />
        <br />
        <input type="eamil" name="email" id="" onChange={handelChange} /> <br />
        <br />
        <input type="password" name="password" id="" onChange={handelChange} />
        <br />
        <br />
        <textarea
          name="address"
          id=""
          cols="30"
          rows="10"
          onChange={handelChange}
        ></textarea>
        <button className="btn btn-success" type="submit">Submit Now</button>
      </form>
    </>
  );
};

export default Newapp;
