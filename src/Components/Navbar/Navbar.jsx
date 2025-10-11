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
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Fly Now</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/admin/all/flight/list">Flight List</Link>
            </li>

            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user.userName ? (
            <div className="flex items-center gap-4">
              {/* Cart */}
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle hover:bg-blue-100 transition">
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2">
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
                  className="card dropdown-content bg-white/90 backdrop-blur-md mt-3 w-60 shadow-xl border border-blue-100 rounded-xl z-50">
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
                  className="btn btn-ghost btn-circle avatar hover:bg-blue-100 transition">
                  <div className="w-10 rounded-full ring-2 ring-blue-200">
                    <img
                      alt="Profile"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-white/95 backdrop-blur-lg rounded-xl mt-3 w-52 p-2 shadow-lg border border-blue-100 z-50">
                  <li>
                    <a className="justify-between text-gray-700 hover:text-blue-600">
                      Profile
                      <span className="badge bg-blue-100 text-blue-600 border-none">
                        New
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 hover:text-blue-600">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => logout()}
                      className="text-gray-700 hover:text-red-600">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
              <div className="border border-b-blue-500 rounded-2xl text-2xl font-bold uppercase">
                <h1 className="px-3">{user.userName}</h1>
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
              }>
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
