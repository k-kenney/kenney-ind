import React from 'react'
import { Link } from "react-router-dom";

const FooterText = () => {
  return (
    <div className="w-screen pb-4 h-screen">
        <div className="flex items-center justify-between w-3/4 m-auto absolute z-20 right-0 left-0">
          <div className="leading-12 font-bold text-xl">
            <Link to="/about">
              <h3>About</h3>
            </Link>
            <Link to="/services">
              <h3>Services</h3>
            </Link>
            <Link to="/quote">
              <h3>Quote</h3>
            </Link>
            <Link to="/careers">
              <h3>Careers</h3>
            </Link>
          </div>
          <div className="text-end">
            <h3 className="text-xl font-bold pb-4">Location</h3>
            <p className="pb-10">
              2110 Panoramic Circle
              <br /> Dallas, Texas 75212
            </p>
            <h3 className="text-xl font-bold pb-4">Email</h3>
            <p className="pb-10">sales@kenneyind.com</p>
            <h3 className="text-xl font-bold pb-4">Call us</h3>
            <p>t: (972) 000-0000</p>
            <p className="pb-10">t: (972) 000-0000</p>
          </div>
        </div>
      </div>
  )
}

export default FooterText