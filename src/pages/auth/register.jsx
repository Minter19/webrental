/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import React, { useState } from "react";


export default function register() {
  const [fieldRegister, setFieldRegister] = useState({});
  const [progress, setProgress] = useState(false);
  const [isSuccessRegister, setIsSuccessRegister] = useState(false);
  function setValue(e) {
    const target = e.target
    const name = target.name;
    const value = target.value;
    setFieldRegister({ ...fieldRegister, [name]: value });
  }

  async function doRegister(e){
    e.preventDefault()
    setProgress(true)
    const req = await fetch(`${process.env.BASE_URL_API_STRAPI}${process.env.ENDPOINT_REGISTER}`,{
      method: 'POST',
      body: JSON.stringify(fieldRegister),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const res = await req.json()
    if(req.ok){
      setIsSuccessRegister(true)
      e.target.reset();
      setFieldRegister({})
    }
    

    setProgress(false)

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
          <div className="self-start hidden lg:flex flex-col  text-white">
            <h1 className="mb-3 font-bold text-5xl">
              Hi, Welcome to Heavy Equipment Rent{" "}
            </h1>
            <p className="pr-3">
            An application that makes all matters regarding the need for heavy equipment rental easier for you, more affordable, and far more complete
            </p>
          </div>
        </div>
        <div className="flex justify-center self-center  z-10">
        <form method="POST" onSubmit={doRegister}>
       
          <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
            <div className="mb-4">
              {isSuccessRegister && (
                <p className="text-green-600 mb-2 p-3 bg-slate-50 rounded-lg italic">Congratulation! Your account has been registered 😁</p>
              )}
              
              <h3 className="font-semibold text-2xl text-gray-800">
                Register Form
              </h3>
              <p className="text-gray-500">Register your account here.</p>
            </div>
            <div className="space-y-5">
              <div className="space-y-2">
                <label
                  htmlFor="username"
                  className="text-sm font-medium text-gray-700 tracking-wide"
                >
                  Username
                </label>
                <input
                  onChange={setValue}
                  name="username"
                  id="username"
                  className=" w-full text-slate-600 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                  type="text"
                  placeholder="Jhon Dower"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700 tracking-wide"
                >
                  Email
                </label>
                <input
                  onChange={setValue}
                  name="email"
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
                  name="password"
                  id="password"
                  className="w-full content-center text-slate-600 px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              <div>
                <button
                  disabled={progress}
                  type="submit"
                  className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-lg   tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                >
                  Register
                </button>
              </div>
              <p className="text-sm italic">
              Have an account? <Link href={"/auth/login"} className="underline">Login here</Link>
              </p>
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
