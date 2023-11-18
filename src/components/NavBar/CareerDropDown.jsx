import React, { useState } from "react";
import { FaAngleRight, FaAngleDown } from "react-icons/fa6";
import qualityPDF from "../../../src/assets/img/quality.png";
import { useLocation } from "react-router-dom";

const CareerDropDown = () => {
  const location = useLocation();
  const [showCareerDropdown, setShowCareerDropdown] = useState(false);
  const [hoveringOverCareer, setHoveringOverCareer] = useState(false);

  const showDropDownHandle = () => {
    setShowCareerDropdown(true);
    setHoveringOverCareer(true);
  };

  const hideDropDownHandle = () => {
    setShowCareerDropdown(false);
    setHoveringOverCareer(false);
  };

  return (
    <div className="flex items-center hover:mb-10 md:hover:mb-0">
      <div
        className="flex items-center gap-1 cursor-pointer"
        onMouseEnter={showDropDownHandle}
        onMouseLeave={hideDropDownHandle}
      >
        Careers
        {/* <span
          className={`${
            location.pathname === "/careers"
              ? "border-b-1 pb-2 border-blue-500"
              : ""
          }`}
        >
          Career{" "}
        </span> */}
        {hoveringOverCareer ? <FaAngleDown /> : <FaAngleRight />}
      

      {/* Drop Down Code for Career Us */}
      {showCareerDropdown && (
        <div
          className="absolute md:top-10 md:left-0 md:w-[137px] md:hover:bg-red/70 md:px-8 md:pt-8 md:pb-4 rounded-md text-base font-medium transform transition ease duration-500
         top-0 left-105 pt-11 pb-2 pl-5 mt-3 md:mt-0 w-full"
          // onMouseLeave={hideDropDownHandle}
        >
          <a href={qualityPDF} className="block text-gray hover:text-white">
            Job
            {/* <span>&nbsp;&nbsp;&nbsp;&nbsp;</span> */}
          </a>
        </div>
      )}
      </div>
    </div>
  );
};

export default CareerDropDown;
