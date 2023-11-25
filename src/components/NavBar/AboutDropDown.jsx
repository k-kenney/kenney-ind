import { useState } from "react";
import { FaAngleRight, FaAngleDown } from "react-icons/fa6";
import qualityPDF from "../../assets/img/dummy.pdf";
import { useNavigate } from "react-router-dom";

const AboutDropDown = () => {
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [hoveringOverAbout, setHoveringOverAbout] = useState(false);
  const navigate = useNavigate();

  const showDropDownHandle = () => {
    setShowAboutDropdown(true);
    setHoveringOverAbout(true);
  };

  const hideDropDownHandle = () => {
    setShowAboutDropdown(false);
    setHoveringOverAbout(false);
  };

  const handleQualityClick = () => {
    console.log("Quality clicked");
    // Navigate using react-router-dom
    // history.push(qualityPDF);
    window.location.href = qualityPDF;
  };


  return (
    <div className="flex items-center hover:mb-20 md:hover:mb-0">
      <div
        className="flex items-center gap-1 cursor-pointer"
        onMouseEnter={showDropDownHandle}
        onMouseLeave={hideDropDownHandle}
      >
        About
        {hoveringOverAbout ? <FaAngleDown /> : <FaAngleRight />}
        {/* Drop Down Code for About Us */}
        {showAboutDropdown && (
          <div
            className="absolute top-0 pt-8 mt-2 md:mt-0 w-full md:top-10 md:left-0 md:w-[126px] md:hover:bg-red/70 md:pl-7 md:pt-6 md:pb-4 rounded-md text-base font-medium transform transition ease duration-150"
            // onMouseLeave={hideDropDownHandle}
          >
            <div
              onClick={ () => navigate("/about") }
              className="block text-gray-300 hover:text-white mt-3 md:mt-1"
            >
              About Us
            </div>

            <div
              onClick={handleQualityClick}
              className="block text-gray-300 hover:text-white md:mt-5 mt-3"
            >
              Quality
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutDropDown;
