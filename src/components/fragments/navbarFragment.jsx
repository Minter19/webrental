import React from "react";
import { destroyCookie } from "nookies";
import Router from "next/router";
import Link from "next/link";

export default function NavbarFragment() {
  function doLogout() {
    destroyCookie(null, "token");
    Router.replace("/auth/login");
  }
  const listProduct = [
    "Excavator",
    "Grader",
    "Crane",
    "Bored Pile",
    "Diesel Hammer",
    "Scraper",
    "Roller",
    "Bulldozer",
    "Dump Truck",
    "Bucket Wheel Excavator",
  ];
  return (
    <>
      <div className="navbar bg-base-100 sticky top-0 shadow-lg  z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <a>Products</a>
                <ul className="p-2">
                  {listProduct.map((item) => (
                    <li key={item}>
                      <a>{item}</a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <a>Orders</a>
              </li>
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>Reviews</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Mprpro&gt;</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Product</summary>
                <ul className="p-2">
                  {listProduct.map((item) => (
                    <li key={item}>
                      <a>{item}</a>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
            <li>
              <a>Orders</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Reviews</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>

        <div className="navbar-end lg:gap-4">
          {/* cart icon */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* user profile icon */}
          <div className="dropdown dropdown-end">
            {/* avatar icon */}
            <div
              tabIndex={0}
              className="btn btn-circle avatar online placeholder"
            >
              <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
                <span className="text-xs">MR</span>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <button onClick={doLogout}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
