import React, { useState } from "react";
import "./Register.css";
import FormInput from "./form/FormInput";
import Logo from "../resources/Super app.png";
import {Link} from "react-router-dom"
function Register() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: false,
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Name",
      errorMessage: "Please provide your name.",
      required: true,
    },
    {
      id: 2,
      name: "username",
      type: "text",
      placeholder: "UserName",
      pattern:".{3,16}",
      errorMessage: "The username should be 3-16 characters",
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Input a valid email ID",
      required: true,
    },
    {
      id: 4,
      name: "mobile",
      type: "text",
      placeholder: "Mobile",
      pattern: "[0-9]{10}",
      errorMessage: "Please provide your number.",
      required: true,
    },
    {
      id: 5,
      name: "check",
      type: "checkbox",
      errorMessage: "Please check this checkbox.",
      label: "Share my registration data with SuperApp",
      required: true,
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSignUp = () => {
    // Save form data to local storage
    localStorage.setItem("formData", JSON.stringify(formData));
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
        <img className="logo" src={Logo} alt="" />
        <div className="text-under-logo">Create your new account</div>
        <div className="loginMethod">
          <div>Email </div> <div className="pipe"> | </div> <div> Google</div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="formInput">
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={formData[input.name]}
                onChange={onChange}
              />
            ))}
            <Link to="./Category"><button className="signupBtn" onClick={handleSignUp}>SIGN UP</button> </Link>
            
            <div className="TnC">
              <p className="tncText">
                By clicking on Sign up. you agree to Superapp <span>Terms and
                Conditions of Use</span>
              </p>
              <p className="tncText">
                To learn more about how Superapp collects, uses, shares and
                protects your personal data please head Superapp <span>Privacy Policy</span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
