import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    checkbox: false
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.name || !formData.username || !formData.email || !formData.phone || !formData.checkbox) {
      alert("Please fill in all required fields.");
    } else {
      alert("Form submitted successfully!");
      // Code to submit form data to server goes here
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Phone:
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="checkbox"
          checked={formData.checkbox}
          onChange={handleChange}
          required
        />{" "}
        I agree to the terms and conditions.
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;