import { Link } from "react-router-dom";
import footerAngle from "../assets/img/footerAngle.svg";
// import Copyright from "./Copyright";

const Footer = () => {
  const googleMapsLink =
    "https://www.google.com/maps/place/2110+Panoramic+Cir,+Dallas,+TX+75212,+USA/@32.76964,-96.8641662,17z/data=!4m6!3m5!1s0x864e9bb98639aba7:0xd0094bdbe861fff7!8m2!3d32.7693923!4d-96.8605127!16s%2Fg%2F11c23d4rp9?entry=ttu";

  return (
    <div>
      <div className="w-full pt-12 pb-12">
        <div className="flex items-center justify-between w-3/4 m-auto absolute z-20 right-0 left-0">
          <div className="leading-12 font-bold text-lg">
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
            <h3 className="text-lg font-bold pb-4">Location</h3>
            <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
              <p className="pb-10 underline">
                2110 Panoramic Circle
                <br /> Dallas, Texas 75212
              </p>
            </a>
            <h3 className="text-lg font-bold pb-4">Email</h3>
            <p className="pb-10">sales@kenneyind.com</p>
            <h3 className="text-lg font-bold pb-4">Call us</h3>
            <p>t: (972) 000-0000</p>
            <p className="pb-10">t: (972) 000-0000</p>
          </div>
        </div>
      </div>
      <div className="relative z-0">
        <img
          src={footerAngle}
          alt="red angle"
          className="w-screen h-80 object-cover"
        />
      </div>
      <div className="w-full bg-red">
        <p className="text-copyright text-center m-auto pb-8 font-special text-sm lg:text-lg tracking-wider">
          Copyright &copy; 2023 KenneyIND. All rights reserved.{" "}
        </p>
      </div>
      {/* <Copyright /> */}
    </div>
  );
};

export default Footer;
