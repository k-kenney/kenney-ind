import { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider my-14 lg:my-36">
      <FaArrowAltCircleLeft className="left-arrow text-3xl sm:text-4xl md:text-5xl" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow text-3xl sm:text-4xl md:text-5xl" onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (<img
              key={index}
              src={slide.image}
              alt="kenney ind"
              className="image w-64 h-44 m-auto sm:w-96 sm:h-auto md:w-2/3 lg:w-full"
            />)}
            
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
