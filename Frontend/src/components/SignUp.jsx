import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    contact: "",

    password: "",

    profileImage: null,
  });

  console.log(formData);

  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          profileImage: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const navigate = useNavigate();
  const handleSignUp = async (formData) => {
    try {
      console.log("Signing up with data:", formData);

      navigate(`/confirm`);
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp(formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-700 flex flex-col gap-10 p-[4rem] rounded-2xl w-full sm:w-[35rem] lg:w-[40rem] sm:my-[3rem]"
      >
        <div className="flex flex-col justify-center items-center border-b-2">
          <h1 className="text-white text-[2rem] sm:text-[2.5rem] font-bold">
            Create Your Account
          </h1>
          <div className="mb-2">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600">
                Log In
              </Link>
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-5">
          <label className="relative w-full my-3">
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className="block w-full p-3 text-sm text-white bg-gray-600 border border-white rounded-md appearance-none focus:outline-none peer"
              required
            />
            <span className="absolute text-white text-lg duration-300 left-3 top-3 peer-focus:text-sm peer-focus:-translate-y-5 peer-focus:px-1 peer-valid:text-sm peer-valid:-translate-y-5 peer-valid:px-1 bg-gray-600">
              First Name
            </span>
          </label>
          <label className="relative w-full my-3">
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className="block w-full p-3 text-sm text-white bg-gray-600 border border-white rounded-md appearance-none focus:outline-none peer"
              required
            />
            <span className="absolute text-white text-lg duration-300 left-3 top-3 peer-focus:text-sm peer-focus:-translate-y-5 peer-focus:px-1 peer-valid:text-sm peer-valid:-translate-y-5 peer-valid:px-1 bg-gray-600">
              Last Name
            </span>
          </label>
          <label className="relative w-full my-3">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className="block w-full p-3 text-sm text-white bg-gray-600 border border-white rounded-md appearance-none focus:outline-none peer"
              required
            />
            <span className="absolute text-white text-lg duration-300 left-3 top-3 peer-focus:text-sm peer-focus:-translate-y-5 peer-focus:px-1 peer-valid:text-sm peer-valid:-translate-y-5 peer-valid:px-1 bg-gray-600">
              Email
            </span>
          </label>
          <label className="relative w-full my-3">
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className="block w-full p-3 text-sm text-white bg-gray-600 border border-white rounded-md appearance-none focus:outline-none peer"
              required
            />
            <span className="absolute text-white text-lg duration-300 left-3 top-3 peer-focus:text-sm peer-focus:-translate-y-5 peer-focus:px-1 peer-valid:text-sm peer-valid:-translate-y-5 peer-valid:px-1 bg-gray-600">
              Contact No.
            </span>
          </label>
        </div>
        <div className="flex flex-col w-full gap-2">
          <label className="relative w-full my-3">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className="block w-full p-3 text-sm text-white bg-gray-600 border border-white rounded-md focus:outline-none peer"
              required
            />
            <span className="absolute text-white text-lg duration-300 left-3 top-3 peer-focus:text-sm peer-focus:-translate-y-5 peer-focus:px-1 peer-valid:text-sm peer-valid:-translate-y-5 peer-valid:px-1 bg-gray-600">
              Create Password
            </span>
          </label>
        </div>
        <div className="flex flex-col w-full gap-2 rounded-lg shadow-sm hover:bg-gray-800 focus:border-2 duration-300 focus:outline-none">
          <input
            type="file"
            id="file"
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
          />
          <label
            htmlFor="file"
            className="text-white font-medium cursor-pointer inline-block px-10 py-4"
          >
            Choose a picture
          </label>
        </div>
        {formData.profileImage && (
          <img
            src={formData.profileImage}
            alt="Profile Preview"
            className="w-32 h-32 object-cover rounded-full mx-auto"
          />
        )}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 p-2 rounded-full text-white mx-auto transition-scale hover:scale-[1.1] hover:cursor-pointer duration-[300ms] font-bold text-[14px] w-full"
        >
          CREATE ACCOUNT
        </button>

        <div className=" mb-2">
          <p>
            Make sure to{" "}
            <Link to="/confirm" className="text-blue-600">
              Confirm Sign Up
            </Link>{" "}
            before logging in.{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
