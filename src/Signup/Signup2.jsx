import React, { useState } from "react";
import logo from "../Image/logo.png";
import { useHistory } from "react-router-dom";

export default function Signup2() {
  const history = useHistory();
  const [user, setuser] = useState({
    phone: "",
    Aphone: "",
    social: "",
  });

  const onInputeChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmitHandelar = (e) => {
    e.preventDefault();
    localStorage.setItem("signup2", JSON.stringify(user));
    history.push("/signup-3");
  };

  return (
    <>
      <section className="flex-container">
        <div className="info">
          <figure>
            <img src={logo} alt="something" />
          </figure>
          <h2>Provide your correct phone no.This information will keep safe</h2>
        </div>
        <div className="about">
          <h1>Contact Information</h1>
          <form onSubmit={onSubmitHandelar}>
            <label>Phone No</label>
            <input
              type="text"
              name="phone"
              placeholder="017"
              value={user.phone}
              onChange={(e) => onInputeChange(e)}
              required
            />
            <label>Alternative Phone No</label>
            <input
              type="text"
              placeholder="018"
              name="Aphone"
              value={user.Aphone}
              onChange={(e) => onInputeChange(e)}
              required
            />
            <label>Social(Optional)</label>
            <input
              type="text"
              placeholder="https://"
              name="social"
              value={user.social}
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
