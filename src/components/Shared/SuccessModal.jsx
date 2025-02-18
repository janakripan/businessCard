import React from "react";
import * as motion from "motion/react-client";

function SuccessModal({ successMsg }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-fit h-fit p-2 px-4 rounded-xl bg-gray-700 fixed top-10 left-1/2 transform -translate-x-1/2 "
    >
      <p className="text-white font-inter font-medium">{successMsg}</p>
    </motion.div>
  );
}

export default SuccessModal;
