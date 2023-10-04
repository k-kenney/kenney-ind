import { FiArrowRightCircle } from "react-icons/fi";

const CareersOpenings = () => {
  return (
    <div>
      <h1 className="bg-red w-2/3 md:w-1/2 text-2xl sm:text-3xl md:text-4xl p-5 md:p-10 text-right font-bold uppercase">
        Current Openings
      </h1>
      <div className="flex flex-col md:flex-row py-12 md:my-14">
        <div className="w-full">
          <div className="careers-card1 homepage-card-text md:border-t-1">
            <button className="careers-button">
              <h2 className="homepage-card-h2">CNC Operator</h2>
              <FiArrowRightCircle className="text-3xl md:text-4xl" />
            </button>
          </div>
          <div className="careers-card2 homepage-card-text border-b-1">
          <button className="careers-button">
              <h2 className="homepage-card-h2">Machinist</h2>
              <FiArrowRightCircle className="text-3xl md:text-4xl" />
            </button>
            
          </div>
        </div>
        <div className="w-full">
          <div className="careers-card3 homepage-card-text md:border-l-1 md:border-t-1 md:border-white">
          <button className="careers-button">
            <h2 className="homepage-card-h2">CNC Programmer</h2>
            <FiArrowRightCircle className="text-3xl md:text-4xl" />
            </button>
          </div>
          <div className="careers-card4 homepage-card-text md:border-l-1 md:border-b-1 md:border-white">
            <button className="careers-button">
            <h2 className="homepage-card-h2">Welder</h2>
            <FiArrowRightCircle className="text-3xl md:text-4xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersOpenings;
