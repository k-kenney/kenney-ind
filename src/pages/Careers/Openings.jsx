// import { OpeningsData } from "./OpeningsData";

import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useParams } from "react-router-dom";
import { OpeningsData } from "../../utils/OpeningsData";

import { FaArrowLeft } from "react-icons/fa6";

const Openings = () => {
  const { id } = useParams();
  const [selectedOpening] = OpeningsData.filter((opening) => id === opening.id);
  console.log(selectedOpening);

  return (
    <div>
      <Navbar />
      <div className="bg-red w-2/3 md:w-1/2 p-5 md:p-10 text-right mt-28">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase">
          {selectedOpening.title}
        </h1>
      </div>
      <div className="w-2/3 m-auto">
        <h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-center"
          style={{ marginTop: "10%" }}
        >
          About
        </h1>
        <p className="my-10 text-lg leading-9">{selectedOpening.about}</p>

        <h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-center"
          style={{ marginTop: "10%" }}
        >
          What You'll Do
        </h1>
        {/* List */}
        <ul className="my-10">
          {selectedOpening.what.map((element) => {
            return (
              <li
                className="list-disc list-inside my-1 text-lg leading-9"
                key={element}
              >
                {element}
              </li>
            );
          })}
        </ul>

        <h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-center"
          style={{ marginTop: "10%" }}
        >
          About You
        </h1>

        {/* List */}
        <ul className="my-10">
          {selectedOpening.you.map((element) => {
            return (
              <li
                className="list-disc list-inside my-1 text-lg leading-9"
                key={element}
              >
                {element}
              </li>
            );
          })}
        </ul>

        <h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-center"
          style={{ marginTop: "10%" }}
        >
          Benefits
        </h1>

        {/* List */}
        <ul className="my-10">
          {selectedOpening.benefits.map((element) => {
            return (
              <li
                className="list-disc list-inside my-1 text-lg leading-9"
                key={element}
              >
                {element}
              </li>
            );
          })}
        </ul>
      </div>

      <Link to="/Careers">
        <div className="flex justify-center items-center text-lg gap-4 py-10">
          <FaArrowLeft />
          <h3 className="underline">Back to careers page</h3>
        </div>
      </Link>
    </div>
  );
};

export default Openings;
