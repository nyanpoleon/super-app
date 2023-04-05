import React, { useState } from "react";
import "./App.css";
// import landingimage from './resources/landingimage.png';

function Register() {
  //THIS PART OF THE CODE IS TO INITIALISE THE FORM
  //formData represents the initial state of the form
  //setFormData is store the change done to the form
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    checkbox: false,
  });

  const [errorMessage, setErrorMessage] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    checkbox: false,
});

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !formData.name ||
      !formData.username ||
      !formData.email ||
      !formData.phone ||
      !formData.checkbox
    ) {
      alert("Please fill in all required fields.");
    } else {
      alert("Form submitted successfully!");
      // Code to submit form data to server goes here
    }
  };
  return (
    <div className="register-page">
      <div className="left-half">
        <div className="imgheader">
          <div>Already have an account?</div>
          <button className="loginBtn">LOGIN</button>
        </div>
        <div className="imgfooter">Discover new things on Superapp</div>
      </div>
      <div className="right-half">
        
      </div>
    </div>
  );
}

export default Register;
