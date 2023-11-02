import animation from "../assets/homeanimation.json";
import Lottie from "lottie-react";

function Intro(props) {
  const [{ header, support }] = props.intro;
  return (
    <>
      <div className="intro-wrapper">
        <h1 className="h1">{header}</h1>
        <h3 className="h3">{support}</h3>
        <div className="animation-wrapper">
          <Lottie animationData={animation} />
        </div>
      </div>
    </>
  );
}
export default Intro;
