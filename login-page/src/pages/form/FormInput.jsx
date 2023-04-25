import { useState } from "react";
import "../Register.css";
import { useNavigate } from "react-router-dom";

const FormInput = (props) => {
  const navigate = useNavigate();

  const [error, setError] = useState(false);
  const [checked, setChecked] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");

  const onChange = (event) => {
    props.setFormData({
      ...props.formData,
      [event.target.name]: event.target.value,
      checkbox: !event.target.checked,
    });

    setChecked(event.target.checked);

    if (
      props.formData.name === "" ||
      props.formData.email === "" ||
      props.formData.username === "" ||
      props.formData.mobile === "" ||
      checked === false
    ) {
      setError(true);
    } else setError(false);
  };

  const handleSignUp = () => {
    if (
      name !== "" &&
      email !== "" &&
      username !== "" &&
      mobile !== "" &&
      checked === true
    ) {
      navigate("/Category");
      localStorage.setItem("formData", JSON.stringify(props.formData));
    } else {
      setError(true);
    }
  };

  return (
    <>
      <input
        type="text"
        name="name"
        placeholder="Name"
        errorMessage="Please provide your name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      {error && name === "" ? <p>please provide your name</p> : ""}
      <input
        type="text"
        name="username"
        placeholder="UserName"
        errorMessage="The user name should be 3-16 characters"
        pattern=".{3,16}"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      {error && username === "" ? (
        <p>The user name should be 3-16 characters</p>
      ) : (
        ""
      )}
      <input
        type="email"
        name="email"
        placeholder="Email"
        errorMessage="Input a valid email"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      {error && email === "" ? <p>Input a valid email</p> : ""}
      <input
        type="text"
        name="mobile"
        placeholder="Mobile"
        errorMessage="Please provide with your number"
        pattern="[0-9]{10}"
        onChange={(event) => {
          setMobile(event.target.value);
        }}
      />
      {error && mobile === "" ? <p>Please provide with your number</p> : ""}
      <input
        type="checkbox"
        name="check"
        errorMessage="Please agree wiht the terms and conditions"
        onChange={(event) => {
          setChecked(event.target.checked);
        }}
      />
      {error && checked === false ? (
        <p>Please agree wiht the terms and conditions</p>
      ) : (
        ""
      )}

      <button className="signupBtn" onClick={handleSignUp}>
        SIGN UP
      </button>
    </>
  );
};

export default FormInput;
