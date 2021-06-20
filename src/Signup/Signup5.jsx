import React, { useState } from 'react'
import logo from "../Image/logo.png";
import { useHistory } from 'react-router-dom';

import Male from "../Image/Male.png"
import Female from "../Image/Female.png"




export default function Signup5() {


      const history = useHistory();
      const [user, setuser] = useState({
            gender: "",
      });
    
    
      const onSubmitHandelar = (e) => {
         e.preventDefault();    
         localStorage.setItem("Signup5",JSON.stringify(user.gender))
         history.push("/signup-6")
      };
    
      const handleOptionChange = (e) => {
        setuser({ ...user, gender: e.target.value });
      };
      return (
            <div>
                   <>
      <section className="flex-container">
        <div className="info">
          <figure>
            <img src={logo} />
          </figure>
          <h2>
            Definig your gender will let us know bring new features for mothers health care.
          </h2>
        </div>
        <div className="about">
          <h1>What is Your Gender</h1>
          <form  onSubmit={onSubmitHandelar}>
             <div className="circle-container">
             <label className="Signup4container">
              <input
                className="Signup4Input"
                type="radio"
                name="radio"

                 value="Male"
                 checked={user.gender === "Male"}
                 onChange={handleOptionChange}
               
              />
              <img className="Signup4Image" src={Male} />
            </label>
            <label className="Signup4container">
              <input
              className="Signup4Input"
                type="radio"
                name="radio"  
                
                value="Female"
                checked={user.gender === "Female"}
                onChange={handleOptionChange}
              />
             <img src={Female} />
            </label>
             </div>
            <input className="Submit4" type="submit" value="Next" />
          </form>
        </div>
      </section>
    </>
            </div>
      )
}
