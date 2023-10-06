import { useState } from "react";
import { SliderData } from "../utils/SliderData";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

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
    <section className="slider mt-16 mb-20 md:mt-20 md:mb-14 lg:my-32">
      <FaAngleLeft
        className="left-arrow text-3xl sm:text-4xl md:text-5xl sm:left-14 md:left-16 lg:left-20 xl:left-32"
        onClick={prevSlide}
      />
      <FaAngleRight
        className="right-arrow text-3xl sm:text-4xl md:text-5xl sm:right-14 md:right-16 lg:right-20"
        onClick={nextSlide}
      />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img
                key={index}
                src={slide.image}
                alt="kenney ind"
                className="image w-80 h-auto m-auto sm:w-96 sm:h-auto md:w-2/3 lg:w-full"
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
