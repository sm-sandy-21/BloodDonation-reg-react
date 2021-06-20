import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import logo from "../Image/logo.png";

export default function Signup3() {
  const history = useHistory();
  const [user, setuser] = useState({
    bloodGroup: "",
  });

  const handleOptionChange = (e) => {
    setuser({ ...user, bloodGroup: e.target.value });
  };

  const onSubmitHandelar = (e) => {
    e.preventDefault();
    localStorage.setItem("Signup3",JSON.stringify(user.bloodGroup))
    history.push("/signup-4")
  };

  

  return (
    <>
      <section className="flex-container">
        <div className="info">
          <figure>
            <img src={logo} />
          </figure>
          <h2>
            Your blood group need to be accurate. If you don't know about
            it,please contact nearest clinic
          </h2>
        </div>
        <div className="about">
          <h1>What is Your Blood Group</h1>
          <form className="circle-container" onSubmit={onSubmitHandelar}>
            <label className="container">
              <input
              className="radio"
                
                type="radio"
                value="A+"
                checked={user.bloodGroup === "A+"}
                onChange={handleOptionChange}
              />
              <span className="checkmark">A+ </span>
            </label>
            <label className="container">
              <input
              className="radio"
                type="radio"
                name="radio"
                value="A-"
                checked={user.bloodGroup === "A-"}
                onChange={handleOptionChange}
              />
              <span className="checkmark">A-</span>
            </label>
            <label className="container">
              <input
              className="radio"
                type="radio"
                name="radio"
                value="B+"
                checked={user.bloodGroup === "B+"}
                onChange={handleOptionChange}
              />
              <span className="checkmark">B+</span>
            </label>
            <label className="container">
              <input
              className="radio"
                type="radio"
                name="radio"
                value="B-"
                checked={user.bloodGroup === "B-"}
                onChange={handleOptionChange}
              />
              <span className="checkmark">B-</span>
            </label>
            <label className="container">
              <input
              className="radio"
                type="radio"
                name="radio"
                value="O+"
                checked={user.bloodGroup === "O+"}
                onChange={handleOptionChange}
              />
              <span className="checkmark">O+</span>
            </label>
            <label className="container">
              <input
              className="radio"
                type="radio"
                name="radio"
                value="O-"
                checked={user.bloodGroup === "O-"}
                onChange={handleOptionChange}
              />
              <span className="checkmark">O-</span>
            </label>
            <label className="container">
              <input
              className="radio"
                type="radio"
                name="radio"
                value="AB+"
                checked={user.bloodGroup === "AB+"}
                onChange={handleOptionChange}
              />
              <span className="checkmark">AB+</span>
            </label>
            <label className="container">
              <input
              className="radio"
                type="radio"
                name="radio"
                value="AB-"
                checked={user.bloodGroup === "AB-"}
                onChange={handleOptionChange}
              />
              <span className="checkmark">AB-</span>
            </label>
            <input
             className="Submit3" type="submit" value="Next" />
          </form>
        </div>
      </section>
    </>
  );
}
