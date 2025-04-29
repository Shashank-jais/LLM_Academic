import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ConfirmSignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    code: "",
  });

  console.log(formData);

  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const navigate = useNavigate();
  const handleConfirmation = async (formData) => {
    try {
      console.log("Confirming data:", formData);

      navigate("/login");
    } catch (error) {
      console.error("Confirmation error:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleConfirmation(formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-700 flex flex-col gap-10 p-[4rem] rounded-2xl w-full sm:w-[35rem] lg:w-[40rem] sm:my-[3rem]"
      >
        <div className="flex flex-col justify-center items-center border-b-2">
          <h1 className="text-white text-[2rem] sm:text-[2.5rem] font-bold">
            Confirm Your Account
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
        <div className="flex flex-col gap-5">
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
              name="code"
              value={formData.code}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className="block w-full p-3 text-sm text-white bg-gray-600 border border-white rounded-md appearance-none focus:outline-none peer"
              required
            />
            <span className="absolute text-white text-lg duration-300 left-3 top-3 peer-focus:text-sm peer-focus:-translate-y-5 peer-focus:px-1 peer-valid:text-sm peer-valid:-translate-y-5 peer-valid:px-1 bg-gray-600">
              Confirmation Code
            </span>
          </label>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 p-2 rounded-full text-white mx-auto transition-scale hover:scale-[1.1] hover:cursor-pointer duration-[300ms] font-bold text-[14px] w-full"
        >
          CONFIRM ACCOUNT
        </button>
      </form>
    </div>
  );
};

export default ConfirmSignUp;
