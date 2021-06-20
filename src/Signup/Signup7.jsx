import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import logo from "../Image/logo.png";

export default function Signup7() {
  const history = useHistory()
  const [user, setUser] = useState({
    age : "",
    date : "",
    month: "",
  })

  const onInputeChange = (e) =>{
    setUser({ ...user, [e.target.name]: e.target.value })
  }

const onSubmitHandelar = (e) =>{
     e.preventDefault();
     localStorage.setItem("Signup7", JSON.stringify(user));
     history.push("/signup-8");
}

      return (
            <>
            <section className="flex-container">
              <div className="info">
                <figure>
                  <img src={logo} />
                </figure>
                <h2>
                 Correct birthday give you best experience with the community.Don't hide it
                </h2>
              </div>
              <div className="about">
                <h1>How Old Are You?</h1>
                <form onSubmit={onSubmitHandelar}>
                 
                   <label>Age</label>
                    <input type="text" name="age" placeholder="28 Years"
                     value={user.age}
                     onChange={(e) => onInputeChange(e)}
                     required
                    /> 
                     <label>Date</label>
                    <input type="text" name="date" placeholder="6"
                    
                    value={user.date}
                    onChange={(e) => onInputeChange(e)}
                    required/>

                     <label>Month</label>
                    <input type="text" name="month" placeholder="May"
                     value={user.month}
                     onChange={(e) => onInputeChange(e)}
                     required/>
                   
                  <input className="Submit4" type="submit" value="Next" />
                </form>
              </div>
            </section>
          </>
      )
}
