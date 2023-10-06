// import { OpeningsData } from "./OpeningsData";

import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useParams } from "react-router-dom";
import { OpeningsData } from "../../utils/OpeningsData";

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
        <Link to="/Careers">
          <h3 className="underline pt-3">Back to careers page</h3>
        </Link>
      </div>
      <div>
        <h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-center"
          style={{ marginTop: "10%" }}
        >
          About
        </h1>
        <p>{selectedOpening.about}</p>

        <h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-center"
          style={{ marginTop: "10%" }}
        >
          What
        </h1>
        {/* List */}
        <ul>
          {selectedOpening.what.map((element) => {
            return (
              <li className="list-disc list-inside" key={element}>
                {element}
              </li>
            );
          })}
        </ul>

        <h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-center"
          style={{ marginTop: "10%" }}
        >
          You
        </h1>

        {/* List */}
        <ul>
          {selectedOpening.you.map((element) => {
            return (
              <li className="list-disc list-inside" key={element}>
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
        <ul>
          {selectedOpening.benefits.map((element) => {
            return (
              <li className="list-disc list-inside" key={element}>
                {element}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Openings;
