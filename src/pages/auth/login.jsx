/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import nookies, { setCookie } from "nookies";
import Router from "next/router";
import Authorization from "../../../middlewares/authorization";
import Link from "next/link";

export async function getServerSideProps(ctx) {
  const auth = Authorization(ctx, process.env.JWT_SECRECT_KEY_STRAPI);

  console.log(process.env.JWT_SECRECT_KEY_STRAPI);
  if (auth) {
    return {
      redirect: {
        destination: "/",
      },
    };
  } else {
    console.log("belum auth");
  }
  return {
    props: {},
  };
}

export default function login() {
  const [fieldLogin, setFieldLogin] = useState({});
  const [progress, setProgress] = useState(false);
  const [isSuccessLogin, setIsSuccessLogin] = useState(false);
  const [isFailedLogin, setIsFailedLogin] = useState(false);
  
  function setValue(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setFieldLogin({ ...fieldLogin, [name]: value });
  }

  async function doLogin(e) {
    e.preventDefault();

    setProgress(true);
    const req = await fetch(
      `${process.env.BASE_URL_API_STRAPI}${process.env.ENDPOINT_LOGIN}`,
      {
        method: "POST",
        body: JSON.stringify(fieldLogin),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const res = await req.json();
    console.log(res)
    if (res.jwt) {
      setIsSuccessLogin(true);
      setCookie(null, "token", res.jwt, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
      Router.replace("/");
    } else {
      setIsFailedLogin(true);
      setTimeout(() => {
        setIsFailedLogin(false);
      },3000)
    }

    
    setProgress(false);
  }
  return (
    <div
      className="bg-no-repeat bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1688176886580-b06b45f0beac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80)",
      }}
    >
      <div className="absolute bg-gradient-to-b from-amber-300 to-amber-600 opacity-75 inset-0 z-0" />
      <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
        <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
          
          {isFailedLogin && (
            <div className="toast toast-top toast-end transition-all ease-in-out">
              <div className="alert alert-error italic">
                <span>Login Failed! <br/>Wrong username or password</span>
              </div>
            </div>
          )}
          <div className="self-start hidden lg:flex flex-col  text-white">
            <h1 className="mb-3 font-bold text-5xl">
              Hi, Welcome to Heavy Equipment Rent{" "}
            </h1>
            <p className="pr-3">
              An application that makes all matters regarding the need for heavy
              equipment rental easier for you, more affordable, and far more
              complete
            </p>
          </div>
        </div>
        <div className="flex justify-center self-center  z-10">
          <form method="POST" onSubmit={doLogin}>
            <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
              <div className="mb-4">
                {isSuccessLogin && (
                  <p className="text-green-600 mb-2 p-3 bg-slate-50 rounded-lg italic">
                    Login Success 😁
                  </p>
                )}

                <h3 className="font-semibold text-2xl text-gray-800">
                  Sign In
                </h3>
                <p className="text-gray-500">Please sign in to your account.</p>
              </div>
              <div className="space-y-5">
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700 tracking-wide"
                  >
                    Email
                  </label>
                  <input
                    required
                    pattern="[^()/><\][\\\x22,;|]+"
                    onChange={setValue}
                    name="identifier"
                    id="email"
                    className="w-full text-slate-600 px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                    type="email"
                    placeholder="mail@gmail.com"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="password"
                    className="mb-5 text-sm font-medium text-gray-700 tracking-wide"
                  >
                    Password
                  </label>
                  <input
                    onChange={setValue}
                    required
                    pattern="[^()/><\][\\\x22,;|]+"
                    name="password"
                    id="password"
                    className="w-full content-center text-slate-600 px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                    type="password"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <Link
                      href="/auth/register"
                      className="italic underline text-slate-400 hover:text-green-500"
                    >
                      Register here
                    </Link>
                  </div>
                  <div className="text-sm">
                    <Link
                      href="/auth/register"
                      className="italic underline text-slate-400 hover:text-green-500"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                </div>
                <div>
                  <button
                    disabled={progress}
                    type="submit"
                    className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-lg   tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                  >
                    Sign In
                  </button>
                </div>
              </div>
              <div className="pt-5 text-center text-gray-400 text-xs">
                <span>Copyright Mpr © 2023</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
