import { FaHeartbeat } from "react-icons/fa";
import "./Btn.css";

const LeftSide = () => {
  return (
    <div className=" lg:space-y-6 pt-10 space-y-4 self-center">
      <div className=" flex items-center gap-4 text-white">
        <span>
          <FaHeartbeat size={30} />
        </span>
        <p>Every Beat, Every Moment</p>
      </div>
      <h1 className="text-2xl lg:text-5xl text-white lg:leading-tight">
        Preventive Care <br /> Is Essential For <br />
        <span className="text-3xl lg:text-6xl font-bold">Healthy Heart</span>
      </h1>
      <p className="text-white font-medium text-lg lg:w-2/3 md:w-11/12">
        We can guide you through issues like Cardiac arrest, Heart Failure,
        Peripheral Artery Disease, Arrhythmia, Atrial Fibrillation, Cholesterol,
        and High BP.
      </p>
      <div>
        <button className=" btn plan-btn">Start Consultnn</button>
      </div>
    </div>
  );
};

export default LeftSide;
