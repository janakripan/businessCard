import Lottie from "lottie-react";
import loadingAnimation from "../../Assets/Animation - 1739605710720.json"; // Download Lottie file

const LoadingAnimation = () => (
  <div className="flex items-center justify-center h-screen">
    <Lottie animationData={loadingAnimation} loop />
  </div>
);

export default LoadingAnimation;
