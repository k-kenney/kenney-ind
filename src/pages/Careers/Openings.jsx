// import { OpeningsData } from "./OpeningsData";

import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Openings = () => {
  return (
    <div>
        <Navbar />
        <div className="bg-red w-2/3 md:w-1/2 p-5 md:p-10 text-right mt-28">
       <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase">Coming Soon!</h1>
       <Link to="/Careers">
       <h3 className="underline pt-3">Back to careers page</h3>
       </Link>
       </div>
    </div>
  )
    }


export default Openings;