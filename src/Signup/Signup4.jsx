import React, { useState } from "react";
import logo from "../Image/logo.png";
import less50kg from "../Image/less50kg.png";
import getter50kg from "../Image/getter50kg.png";
import { useHistory } from "react-router-dom";

export default function Signup4() {
  const history = useHistory();
  const [user, setuser] = useState({
    weight: "",
  });
  const handleOptionChange = (e) => {
    setuser({ ...user, weight: e.target.value });
  };

  const onSubmitHandelar = (e) => {
    e.preventDefault();
    localStorage.setItem("Signup4", JSON.stringify(user.weight));
    history.push("/signup-5");
  };

  return (
    <>
      <section className="flex-container">
        <div className="info">
          <figure>
            <img src={logo} />
          </figure>
          <h2>
            Note: you can not donate blood if you're under weight.Minimum weight
            for donation required 50 kG
          </h2>
        </div>
        <div className="about">
          <h1>What Is Your Weight</h1>
          <form onSubmit={onSubmitHandelar}>
            <div className="circle-container">
              <label className="Signup4container">
                <input
                  className="Signup4Input"
                  type="radio"
                  name="radio"
                  value="Less Then 50 Kg"
                  checked={user.weight === "Less Then 50 Kg"}
                  onChange={handleOptionChange}
                />
                <img className="Signup4Image" src={less50kg} />
              </label>
              <label className="Signup4container">
                <input
                  className="Signup4Input"
                  type="radio"
                  name="radio"
                  value="Gretter then 50 Kg"
                  checked={user.weight === "Gretter then 50 Kg"}
                  onChange={handleOptionChange}
                />
                <img src={getter50kg} />
              </label>
            </div>
            <input className="Submit4" type="submit" value="Next" />
          </form>
        </div>
      </section>
    </>
  );
}
