import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { removeTokenLS } from "../../utilities/tokenStore";
import { userContext } from "../../context/Context";

const Navbar = () => {
  const { setUser, user } = useContext(userContext);
  const logout = () => {
    removeTokenLS();
    setUser({});
  };
  return (
    <div className="sticky top-0 z-50 bg-white/70 backdrop-blur-lg shadow-md border-b border-blue-100">
      <div className="navbar max-w-7xl mx-auto px-4">
        {/* Left: Brand */}
        <div className="flex-1">
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-bold text-blue-700 hover:text-blue-800 transition"
          >
            Fly Now
          </Link>
        </div>

        {/* Center: Navigation */}
        <div className="hidden md:flex gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium transition ${
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "text-gray-700 hover:text-blue-600"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/admin/all/flight/list"
            className={({ isActive }) =>
              `font-medium transition ${
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "text-gray-700 hover:text-blue-600"
              }`
            }
          >
            All Flights
          </NavLink>
          <NavLink
            to="/admin/all/flight/post"
            className={({ isActive }) =>
              `font-medium transition ${
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "text-gray-700 hover:text-blue-600"
              }`
            }
          >
            Add Flight
          </NavLink>
        </div>

        {/* Right: Icons */}
        {user.userName ? (
          <div className="flex items-center gap-4">
            {/* Cart */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle hover:bg-blue-100 transition"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M17 13a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item bg-blue-600 text-white border-none">
                    8
                  </span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card dropdown-content bg-white/90 backdrop-blur-md mt-3 w-60 shadow-xl border border-blue-100 rounded-xl z-50"
              >
                <div className="card-body">
                  <span className="text-lg font-semibold text-gray-800">
                    8 Items
                  </span>
                  <span className="text-blue-600 font-medium">
                    Subtotal: $999
                  </span>
                  <div className="card-actions">
                    <button className="btn btn-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg w-full">
                      View Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Avatar */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar hover:bg-blue-100 transition"
              >
                <div className="w-10 rounded-full ring-2 ring-blue-200">
                  <img
                    alt="Profile"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white/95 backdrop-blur-lg rounded-xl mt-3 w-52 p-2 shadow-lg border border-blue-100 z-50"
              >
                <li>
                  <a className="justify-between text-gray-700 hover:text-blue-600">
                    Profile
                    <span className="badge bg-blue-100 text-blue-600 border-none">
                      New
                    </span>
                  </a>
                </li>
                <li>
                  <a className="text-gray-700 hover:text-blue-600">Settings</a>
                </li>
                <li>
                  <a
                    onClick={() => logout()}
                    className="text-gray-700 hover:text-red-600"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `font-medium transition ${
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "text-gray-700 hover:text-blue-600"
              }`
            }
          >
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
