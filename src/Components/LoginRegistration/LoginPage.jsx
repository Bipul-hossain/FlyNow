import axios from "axios";
import { FaUser, FaLock } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { setTokenLS } from "../../utilities/tokenStore";
import { useContext } from "react";
import { loadingContext, userContext } from "../../context/Context";

const LoginPage = () => {
  const { setUser } = useContext(userContext);
  const { isLoading, setIsLoading } = useContext(loadingContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const tryLoginUser = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    console.log(tryLoginUser);
    axios
      .post("http://localhost:3000/api/login", tryLoginUser)
      .then(function (response) {
        console.log(response);
        setUser(response.data);
        setTokenLS(response.headers["x-auth-token"]);
      })
      .catch(function (error) {
        console.log(error);
      });
    setIsLoading(false);
  };
  return (
    <div className="w-full">
      <div className="flex flex-col gap-6">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-white drop-shadow-md">
          Welcome Back 👋
        </h2>
        <p className="text-center text-white/80 text-sm mb-4">
          Please log in to continue your journey with{" "}
          <span className="text-yellow-300 font-semibold">FlyNow</span> ✈️
        </p>

        {/* Login Form */}
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-5 bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-md border border-white/30"
        >
          {/* Username Field */}
          <div className="flex items-center bg-white/90 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition">
            <MdOutlineAlternateEmail className="text-gray-500 mr-2" />
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-500"
              required
            />
          </div>

          {/* Password Field */}
          <div className="flex items-center bg-white/90 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition">
            <FaLock className="text-gray-500 mr-2" />
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-500"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300"
          >
            Login
          </button>

          {/* Forgot Password */}
          <p className="text-center text-sm text-white/80 hover:text-yellow-300 cursor-pointer transition">
            Forgot Password?
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
