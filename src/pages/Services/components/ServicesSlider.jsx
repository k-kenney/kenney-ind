import { useState } from "react";
import { ServicesSliderData } from "../../../utils/ServicesSliderData";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const ServicesSlider = ({ slides }) => {
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
    <div>
      <h1 className="text-3xl xl:text-4xl pt-6 m-0 flex justify-center items-center uppercase">
        Other Services
      </h1>
      <section className="slider mt-16 mb-20 md:mt-20 md:mb-32 lg:my-36">
        <FaAngleLeft
          className="left-arrow text-3xl sm:text-4xl md:text-5xl sm:left-20 md:left-28 lg:left-40 xl:left-48"
          onClick={prevSlide}
        />
        <FaAngleRight
          className="right-arrow text-3xl sm:text-4xl md:text-5xl sm:right-20 md:right-28 lg:right-40 xl:right-48"
          onClick={nextSlide}
        />
        {ServicesSliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <div className="card-container m-auto">
                  <div className="card-image lg:w-full">
                    <img
                      key={index}
                      src={slide.image}
                      alt="kenney ind"
                      className="image w-96 h-auto m-auto lg:w-3/4 sm:h-auto "
                    />
                  </div>
                  <div className="card-content px-6 py-4 w-3/4 lg:right-20">
                    <div className="font-bold text-xl mb-2 text-white">
                      {slide.title}
                    </div>
                    <p className="text-base text-white">
                      {slide.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default ServicesSlider;
