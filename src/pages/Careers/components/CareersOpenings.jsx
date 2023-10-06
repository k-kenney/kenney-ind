import { FiArrowRightCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import { OpeningsData } from "../../../utils/OpeningsData";

const CareersOpenings = () => {
  return (
    <div>
      <h1 className="bg-red w-2/3 md:w-1/2 text-2xl  lg:text-4xl p-5 md:p-10 text-right font-bold uppercase">
        Current Openings
      </h1>
      <div className="flex flex-col md:flex-row py-12 md:my-14">
        <div className="w-full">
          {OpeningsData.map((opening, index) => {
            return (
              <div key={index} className="careers-card1 homepage-card-text md:border-t-1">
                <Link to={`/Openings/${opening.id}`}>
                  <button className="careers-button">
                    <h2 className="homepage-card-h2">{opening.title}</h2>
                    <FiArrowRightCircle className="text-3xl md:text-4xl" />
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CareersOpenings;
