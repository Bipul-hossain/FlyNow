import React, { useContext, useState } from "react";
import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";
import { userContext } from "../../context/Context";

const LoginDeshboard = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const { user, setUser } = useContext(userContext);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-300 via-indigo-300 to-purple-400 p-6">
      {/* Header Section */}
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center drop-shadow-lg">
        ✈ Enjoy Your First Fly with{" "}
        <span className="text-yellow-300">FlyNow</span> — Up to{" "}
        <span className="text-yellow-400">45% Discount!</span>
      </h1>
      {user.userName}

      {/* Card Container */}
      <div className="w-full max-w-md bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/30 p-8 transition-all duration-500">
        {/* Toggle Buttons */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setIsLoginPage(true)}
            className={`px-6 py-2 rounded-l-lg text-white font-semibold transition-all duration-300 ${
              isLoginPage
                ? "bg-blue-600 shadow-lg scale-105"
                : "bg-blue-400 hover:bg-blue-500"
            }`}
          >
            LOGIN
          </button>
          <button
            onClick={() => setIsLoginPage(false)}
            className={`px-6 py-2 rounded-r-lg text-white font-semibold transition-all duration-300 ${
              !isLoginPage
                ? "bg-purple-600 shadow-lg scale-105"
                : "bg-purple-400 hover:bg-purple-500"
            }`}
          >
            REGISTER
          </button>
        </div>

        {/* Toggle Content */}
        <div
          className="transition-all duration-500 ease-in-out"
          key={isLoginPage ? "login" : "register"}
        >
          {isLoginPage ? (
            <LoginPage />
          ) : (
            <RegistrationPage setIsLoginPage={setIsLoginPage} />
          )}
        </div>
      </div>

      {/* Footer Note */}
      <p className="text-white/80 mt-6 text-sm">
        © 2025 FlyNow Airlines — Safe, Fast, & Affordable ✈️
      </p>
    </div>
  );
};

export default LoginDeshboard;
