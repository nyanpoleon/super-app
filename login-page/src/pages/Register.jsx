import React, { useState } from "react";
import "./Register.css";
import FormInput from "./form/FormInput";


function Register() {
  const [formData, setFormData] = useState({
    name:"",
    username:"",
    email:"",
    mobile:"",
    checkbox: false
  });

  const inputs = [
    {
      id:1,
      name:"name",
      type:"text",
      placeholder:"Name",
      required: true,
    },
    {
      id:2,
      name:"username",
      type:"text",
      placeholder:"UserName",
      required: true,
    },
    {
      id:3,
      name:"email",
      type:"email",
      placeholder:"Email",
      required: true,
    },
    {
      id:4,
      name:"mobile",
      type:"text",
      placeholder:"Mobile",
      required: true,
    },
    {
      id:5,
      name:"check",
      type:"checkbox",
      label:"Share my registration data with SuperApp",
      required: true,
    },
  ];

  console.log(formData)
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
        <form>
          <div className="formInput">

            <FormInput placeholder='Name' setFormData={setFormData}/>
            <FormInput placeholder='UserName'/>
            <FormInput placeholder='Email'/>
            <FormInput placeholder='Phone'/>
  
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
