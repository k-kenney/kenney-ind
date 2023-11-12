import React, { useState } from "react";
import { FaAngleRight, FaAngleDown } from "react-icons/fa6";
import qualityPDF from "../../../src/assets/img/quality.png";

const AboutDropDown = () => {
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
        // onMouseLeave={hideDropDownHandle}
      >
        <span>About</span>
        {hoveringOverAbout ? <FaAngleDown /> : <FaAngleRight />}
      </div>

      {/* Drop Down Code for About Us */}
      {showAboutDropdown && (
         <div className="custom-dropdown-menu" onMouseLeave={hideDropDownHandle}>
         <a href={qualityPDF} className="block py-2 hover:bg-gray-700">
           Quality
         </a>
         {/* Add more items as needed */}
       </div>
      )}
    </div>
  );
};

export default AboutDropDown;
