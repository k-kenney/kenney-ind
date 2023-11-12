import React, {useState} from "react";
import { FaAngleRight, FaAngleDown } from "react-icons/fa6";
import qualityPDF from "../../../src/assets/img/quality.png";

const CareerDropDown = () => {
    const [showAboutDropdown, setShowAboutDropdown] = useState(false);
    const [hoveringOverAbout, setHoveringOverAbout] = useState(false);
  
    const showDropDownHandle = () => {
        setShowAboutDropdown(true);
        setHoveringOverAbout(true);
    };
  
    const hideDropDownHandle = () => {
        setShowAboutDropdown(false);
        setHoveringOverAbout(false);
  
    };


  return (
    <div className="flex items-center">
      <div
        className="flex items-center gap-1 cursor-pointer"
        onMouseEnter={showDropDownHandle}
        onMouseLeave={hideDropDownHandle}
      >
        <span>Career </span>
        {hoveringOverAbout ? <FaAngleDown /> : <FaAngleRight />}
      </div>

      {/* Drop Down Code for About Us */}
      {showAboutDropdown && (
        <div className="absolute top-10 left-0 bg-inherit text-gray-300 hover:text-white rounded-md py-1 px-4 bg-black">
          <a href={qualityPDF}>Job</a>
        </div>
      )}
    </div>
  );
};

export default CareerDropDown;
