import axios from "axios";
import { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const RegistrationPage = ({ setIsLoginPage }) => {
  const [passwordMachErrorMassage, setPasswordMachErrorMassage] = useState("");
  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    if (e.target.password.value !== e.target.confirmpassword.value) {
      setPasswordMachErrorMassage("Confirm Password Does not match");
      return;
    }
    const newUser = {
      userName: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    axios
      .post("http://localhost:3000/api/users", newUser)
      .then(function (response) {
        console.log(response);
        setIsLoginPage(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="w-full">
      <div className="flex flex-col gap-6">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-white drop-shadow-md">
          Create Your Account ✈️
        </h2>
        <p className="text-center text-white/80 text-sm mb-4">
          Join <span className="text-yellow-300 font-semibold">FlyNow</span> and
          enjoy exclusive offers up to 45% off!
        </p>

        {/* Registration Form */}
        <form
          onSubmit={handleRegistrationSubmit}
          className="flex flex-col gap-5 bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-md border border-white/30"
        >
          {/* Full Name */}
          <div className="flex items-center bg-white/90 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition">
            <FaUser className="text-gray-500 mr-2" />
            <input
              type="text"
              name="username"
              placeholder="Full Name"
              className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-500"
              required
            />
          </div>

          {/* Email */}
          <div className="flex items-center bg-white/90 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition">
            <FaEnvelope className="text-gray-500 mr-2" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-500"
              required
            />
          </div>

          {/* Password */}
          <div className="flex items-center bg-white/90 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition">
            <FaLock className="text-gray-500 mr-2" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-500"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="flex items-center bg-white/90 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition">
            <FaLock className="text-gray-500 mr-2" />
            <input
              type="password"
              name="confirmpassword"
              placeholder="Confirm Password"
              className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-500"
              required
            />
          </div>
          <div>
            <p>{passwordMachErrorMassage}</p>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300"
          >
            Register
          </button>

          {/* Login Redirect */}
          <p className="text-center text-sm text-white/80">
            Already have an account?{" "}
            <span className="text-yellow-300 font-semibold hover:underline cursor-pointer">
              Login here
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
