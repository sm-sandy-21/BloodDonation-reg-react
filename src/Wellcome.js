import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../src/Image/logo.png"
export default function Wellcome() {
  return (
    <>
      <section className="wellcome-container">
        <figure>
          <img className="logo" src={logo} />
        </figure>
        <NavLink to="/signin">
        <button className="btnStart">Start Journey</button>
        </NavLink>
        
      </section>
    </>
  );
}
