
import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);


  const validate = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) error = "Name cannot be empty.";
        break;

      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) error = "Email is required.";
        else if (!emailRegex.test(value)) error = "Invalid email format.";
        break;

      case "password":
        const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
        if (!value) error = "Password is required.";
        else if (!passwordRegex.test(value))
          error = "Password must be at least 8 characters long and include one number & one special character.";
        break;

      case "confirmPassword":
        if (!value) error = "Please confirm your password.";
        else if (value !== formData.password)
          error = "Passwords do not match.";
        break;

      default:
        break;
    }

    return error;
  };


  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });


    setErrors({
      ...errors,
      [name]: validate(name, value),
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validate(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg p-8 rounded-2xl w-96"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">
          User Registration
        </h2>

        {/* Name Field */}
        <div className="mb-4">
          <label className="block font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border w-full p-2 rounded-md"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block font-medium">Email</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border w-full p-2 rounded-md"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="block font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border w-full p-2 rounded-md"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        {/* Confirm Password Field */}
        <div className="mb-4">
          <label className="block font-medium">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="border w-full p-2 rounded-md"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white w-full py-2 rounded-md mt-2 hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

  
      {submitted && (
        <div className="mt-6 bg-green-100 text-green-800 p-4 rounded-md w-96 text-center shadow-md">
          <h3 className="text-lg font-semibold mb-2">✅ Form Submitted Successfully!</h3>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
        </div>
      )}
    </div>
  );
};




export default Form