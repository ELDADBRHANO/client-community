import "./loop-section.css";
import { Image } from "react-bootstrap";

const LoopSection = () => {
  return (
    <div className="mainLoopSection">
      <div className="d-flex flex-column justify-content-center align-items-center LoopSectionOne">
        <h1 >Grow your following without draining your time</h1>
        <h5 className="mt-4">
          Social media can be the fastest and cheapest way to build your
          following and grow your business. But it can also take up all your
          time. Here are four ways Buffer can help.
        </h5>
      </div>
      <div className="d-flex justify-content-center">
        <Image src="./images/LoopImg.svg" className="LoopSectionImg"/>
      </div>
    </div>
  );
};

export default LoopSection;
