import React from 'react'

export default function HeroFragments() {
  return (
    <>
    <div className="w-100 -mt-14">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1629132497808-1c55ac45c4da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1546&q=80)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">🚧 Hello there 🚧 </h1>
              <p className="mb-5">Are you in need of reliable and cost-effective heavy equipment for your construction projects? Look no further! At Mpropro App, we offer the most comprehensive and affordable heavy equipment rental services in Indonesia.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
