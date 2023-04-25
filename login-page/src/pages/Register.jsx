import React, { useState } from "react";
import "./Register.css";
import FormInput from "./form/FormInput";
import Logo from "../resources/Super app.png";
function Register() {
  

  
  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("formData", formData);
  };
  
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: false,
  });

 

  
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
            
              <FormInput
                formData={formData}
                setFormData={setFormData}
                // id={input.id}
                // key={input.id}
                // {...input}
                // value={formData[input.name]}
                // onChange={onChange}
              />
           
            
            
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
