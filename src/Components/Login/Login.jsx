import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
  };

  return (
    <div className='loginSignup'>
      <div className="loginsignup-container">
        <h1>Sign Up / Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="loginsignup-fields">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className='loginsignup-button'>Continue</button>
        </form>
        <p className='loginsignup-login'>
          Already have an account? <span className='loginsignup-link'>Login Here</span>
        </p>
        <div className="loginsignup-agree">
          <input
            type="checkbox"
            name="agree"
            id="agree-checkbox"
            checked={formData.agree}
            onChange={handleChange}
          />
          <label htmlFor="agree-checkbox">
            By continuing, I agree to the terms of use & privacy policy
          </label>
        </div>
      </div>
    </div>
  );
};

export default Login;
