import React, { useState } from "react";
import logo from "../Image/logo.png";
import {useHistory } from 'react-router-dom';


export default function Signup1() {

  const history = useHistory()
  const [user, setUser] = useState({
    name : "",
    email : "",
    password: "",
    showPassword:false
  })

  const onInputeChange = (e) =>{
    setUser({ ...user, [e.target.name]: e.target.value })
  }

const onSubmitHandelar = (e) =>{
    e.preventDefault();
    localStorage.setItem("signup1", JSON.stringify(user));
    history.push("/signup-2");
}

  return (
    <>
      <section className="flex-container">
        <div className="info">
          <figure>
            <img src={logo} alt="description of image" />
          </figure>
          <h2>
            Provide your real name for identity. Your name will be used for
            search
          </h2>
        </div>
        <div className="about">
          <h1>Let Us Know About You</h1>
          <form onSubmit={onSubmitHandelar}> 
            <label htmlFor="fname">Username</label>
            <input type="text" name="name" placeholder="Sandy"
            value={user.name}
            onChange={(e) => onInputeChange(e)}
            required
            />
            <label htmlFor="lname">Email</label>
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
           
            
          </form>
        </div>
      </section>
    </>
  );
}
