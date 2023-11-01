import { flexbox } from "@mui/system";
import React from "react";
import Lottie from "react-lottie";
import LoadingAnimation from "../assets/lotties/data.json";

function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-white">
      <div>
        <div className="flex flex-col items-center justify-center mb-20 -mt-40 text-3xl font-bold " >
          <h1 style={{fontFamily:'SamsungSharpSans-bold'}} >Clickers</h1>
          <h1 style={{fontFamily:'SamsungSharpSans-bold'}} >Loading...</h1>
        </div>
        <Lottie  options={defaultOptions} height={200} width={200} />
      </div>
    </div>
  );
}

export default Loading;
