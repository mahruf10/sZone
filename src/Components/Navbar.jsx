import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Authcontext } from "./AuthContext/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logoutUser, loading, showCart, price } =
    useContext(Authcontext);

  const handlelogout = () => {
    logoutUser();
    Swal.fire({
      icon: "success",
      title: "User logged Out",
      text: "SignIn Now",
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-20">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="w-full md:w-11/12 mx-auto">
      <div className="navbar bg-base-100 shadow-sm overflow-x-hidden">

        {/* LEFT */}
        <div className="navbar-start">

          {/* MOBILE MENU */}
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost text-xl">
              ☰
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/sports">All Sports Equipment</NavLink></li>
              {user && (
                <>
                  <li><NavLink to="/myequipment">My Equipment List</NavLink></li>
                  <li><NavLink to="/addEquipment">Add Equipment</NavLink></li>
                </>
              )}
            </ul>
          </div>

          {/* LOGO */}
          <NavLink
            to="/"
            className="btn btn-ghost text-2xl md:text-3xl font-serif border-2 px-3 bg-sky-400 font-bold"
          >
            sZone
          </NavLink>
        </div>

        {/* CENTER (Laptop only) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-6">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/sports">All Sports Equipment</NavLink></li>
            {user && (
              <>
                <li><NavLink to="/myequipment">My Equipment List</NavLink></li>
                <li><NavLink to="/addEquipment">Add Equipment</NavLink></li>
              </>
            )}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end gap-2 md:gap-3">

          {/* CART */}
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle btn-sm md:btn-md"
            >
              🛒
              <span className="badge badge-sm indicator-item">
                {showCart}
              </span>
            </label>

            <div className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
              <div className="card-body">
                <span className="font-bold">{showCart} Items</span>
                <span className="text-info">Subtotal: {price}৳</span>
                <NavLink to="/viewcart">
                  <button className="btn btn-primary btn-block bg-green-500">
                    View cart
                  </button>
                </NavLink>
              </div>
            </div>
          </div>

          {/* PROFILE */}
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar btn-sm md:btn-md"
            >
              <div className="w-8 md:w-10 rounded-full">
                <img
                  src={
                    user
                      ? user.photoURL
                      : "https://www.shutterstock.com/image-vector/default-avatar-social-media-display-600nw-2632690107.jpg"
                  }
                  alt="profile"
                />
              </div>
            </label>

            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><NavLink to="/profile">Profile</NavLink></li>
              {user ? (
                <li>
                  <button onClick={handlelogout}>Logout</button>
                </li>
              ) : (
                <li><NavLink to="/login">Login</NavLink></li>
              )}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
