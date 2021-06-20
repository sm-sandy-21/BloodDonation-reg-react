import React, { useState } from "react";
import logo from "../Image/logo.png";
import {useHistory } from 'react-router-dom';


export default function Signup6() {

  const history = useHistory()
  const [user, setUser] = useState({
    street : "",
    city : "",
    PostalCode: "",
  })

  const onInputeChange = (e) =>{
    setUser({ ...user, [e.target.name]: e.target.value })
  }

const onSubmitHandelar = (e) =>{
     e.preventDefault();
     localStorage.setItem("Signup6", JSON.stringify(user));
     history.push("/signup-7");
}

  return (
    <>
      <section className="flex-container">
        <div className="info">
          <figure>
            <img src={logo} alt="description of image" />
          </figure>
          <h2>
            Provide your correct address. This information will keep safe
          </h2>
        </div>
        <div className="about">
          <h1>Let Us Know About You</h1>
          <form onSubmit={onSubmitHandelar}> 
            <label>Street Address</label>
            <input type="text" name="street" placeholder="123/4,Saint Road"
            value={user.street}
            onChange={(e) => onInputeChange(e)}
            required
            />
            <label >City</label>
            <input type="text" name="city" placeholder="Dhaka"
            value={user.city}
            onChange={(e) => onInputeChange(e)}
            required
            />
            <label>Postal Code</label>
            <input type="text" name="PostalCode" placeholder="X X X X"
            value={user.PostalCode}
            onChange={(e) => onInputeChange(e)}
            required
            />
           


            <input className="Submit" type="submit" value="Next" />
           
            
          </form>
        </div>
      </section>
    </>
  );
}
