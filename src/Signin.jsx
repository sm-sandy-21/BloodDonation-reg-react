import React, { useState } from "react";
import logo from "./Image/logo.png";
import {useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import axios from "axios";


export default function Signin() {

  const history = useHistory()
  const [user, setUser] = useState({
    email : "",
    password: "",
    showPassword:false
  })

  const onInputeChange = (e) =>{
    setUser({ ...user, [e.target.name]: e.target.value })
  }

const onSubmitHandelar = async(e) =>{
    e.preventDefault();
    let myresult = await axios.get("http://localhost:3000/users");

     console.log(myresult.data[0].email )

    if (myresult.data[0].email == user.email && myresult.data[0].password == user.password ) {
      
      localStorage.setItem("user-info", JSON.stringify(myresult));
      alert("Login Sucessfully")

    } else {

      history.push("/signin");
     alert("Your username or password is incorrect")

    }
  }


  return (
    <>
      <section className="flex-container">
        <div className="SignIn-info">
          <figure>
            <img src={logo} alt="description of image" />
          </figure>
        </div>
        <div className="about">
          <h1>Sign In</h1>
          <form onSubmit={onSubmitHandelar}> 
            <label htmlFor="lname">Email or Username</label>
            <input
              type="email"
              name="email"
              placeholder="sandy@gmail.com"
              value={user.email}
              onChange={(e) => onInputeChange(e)}
              required
            />
            <label htmlFor="lname">Password</label>
            <input
              type={user.showPassword ? "text" : "password"}
              name="password"
              id="myInput"
              placeholder="*******"

              value={user.password}
              onChange={(e) => onInputeChange(e)}
              required

            />
            <span
               onClick={()=> setUser({ ...user, showPassword: !user.showPassword })}
              className="fa fa-fw fa-eye field-icon toggle-password"
            />

            <input className="Submit" type="submit" value="Next" />          
             <div className="forget">
            <NavLink to="/forgot"> <p>Forgot Password?</p></NavLink>
             <p>Don't have an account?<b> <NavLink to="/signup-1">Sign Up</NavLink></b></p>
             </div>
          </form>
        </div>
      </section>
    </>
  );
}
