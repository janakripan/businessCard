import React from "react";
import * as motion from "motion/react-client";

function ErrorModal({ apiError, setApiError }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.1,
        ease: "easeInOut",
        delay: 0.3,
      }}
      className="w-full h-screen bg-transparent fixed inset-0 flex  justify-center pt-10"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0, y: 20 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="w-fit py-8 px-6 h-fit bg-white shadow-lg flex flex-col items-center gap-4"
      >
        <p className=" font-inter text-red-500 font-medium shadow-2xl ">
          {"Error:" + apiError}
        </p>
        <button
          onClick={() => setApiError("")}
          className="px-6 py-1 bg-[#F66F4D] rounded-lg mt-3 active:scale-90 active:bg-gray-500 transition-all duration-150 "
        >
          OK
        </button>
      </motion.div>
    </motion.div>
  );
}

export default ErrorModal;
