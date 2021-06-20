import React, { useState } from "react";
import logo from "../Image/logo.png";
import { useHistory } from "react-router-dom";

import Upload from "../Image/upload.png";
import axios from "axios";

export default function Signup8() {
  const [selectedFile, setSelectedFile] = useState({
    file: "",
    fileReader: "",
  });
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (e) => {
    setfinalinfo({ ...finalinfo, ImageName: e.target.files[0].name });
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setSelectedFile({
          ...selectedFile,
          fileReader: reader.result,
          file: e.target.files[0],
        });

        setIsFilePicked(true);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const signup1 = JSON.parse(localStorage.getItem("signup1"));
  const signup2 = JSON.parse(localStorage.getItem("signup2"));
  const signup3 = JSON.parse(localStorage.getItem("Signup3"));
  const signup4 = JSON.parse(localStorage.getItem("Signup4"));
  const signup5 = JSON.parse(localStorage.getItem("Signup5"));
  const signup6 = JSON.parse(localStorage.getItem("Signup6"));
  const signup7 = JSON.parse(localStorage.getItem("Signup7"));

  const [finalinfo, setfinalinfo] = useState({
    name: signup1.name,
    email: signup1.email,
    password: signup1.password,
    phone: signup2.phone,
    Aphone: signup2.Aphone,
    social: signup2.social,
    bloodGroup: signup3,
    weight: signup4,
    gender: signup5,
    street: signup6.street,
    city: signup6.city,
    PostalCode: signup6.PostalCode,
    age: signup7.age,
    date: signup7.date,
    month: signup7.month,
    ImageName: null,
  });

  //console.log(JSON.stringify(finalinfo))

  const handleSubmission = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/users", finalinfo);

    alert("data send");
    // history.push("/signup-1");
  };

  return (
    <>
      <section className="flex-container">
        <div className="info">
          <figure>
            <img src={logo} />
          </figure>
          <h2>
            Please Do not use a model or doll avatar.Please keep faith on
            yourself,you're beautiful too
          </h2>
        </div>
        <div className="about">
          <h1>Yor're almost done</h1>
          <form onSubmit={handleSubmission}>
            <div className="circle-container">
              <label className="Signup8container">
                <input
                  className="Signup8Input"
                  type="file"
                  accept="image/*"
                  onChange={(e) => changeHandler(e)}
                />
                {isFilePicked ? (
                  <div>
                    <img
                      className="imageView"
                      src={selectedFile.fileReader}
                    ></img>
                  </div>
                ) : (
                  <img className="Signup8Image" src={Upload} />
                )}
              </label>
            </div>
            <input className="Submit8" type="submit" value="Start Journy" />
          </form>
        </div>
      </section>
    </>
  );
}
