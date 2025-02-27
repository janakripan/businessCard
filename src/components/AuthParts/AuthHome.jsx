import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SignUp from "./SignUp";
import Login from "./Login";
import loginbg from "../../Assets/Login-amico.png";
import Signupbg from "../../Assets/Telecommuting-rafiki.png";

function AuthHome() {
  const [isNew, setIsNew] = useState(true);
  return (
    <div className="w-full max-w-screen-xl mx-auto  h-screen  flex items-center justify-center pt-24  ">
      <div
        className="w-full   h-full flex items-center justify-center md:py-6 lg:pt-20 "
        style={{
          backgroundImage: "url('/authBg.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-11/12 h-fit lg:h-fit lg:py-52 xl:h-full xl:py-16 items-center  shadow-lg relative overflow-hidden bg-gray-50 transition-all duration-300 p-0 lg:p-6 ">
          
          <AnimatePresence mode="wait">
            {
              isNew
              ?<img
              src={Signupbg}
              alt=""
              className="object-cover w-0 lg:w-[50%] absolute right-0 "
            />
            :<img
            src={loginbg}
            alt=""
            className="object-cover w-0 lg:w-[50%] absolute right-0  "
          />
            }
            {isNew ? (
              <motion.div
                key="signup"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <SignUp setIsNew={setIsNew} isNew={isNew} />
              </motion.div>
            ) : (
              <motion.div
                key="login"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
              >
                <Login setIsNew={setIsNew} isNew={isNew} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default AuthHome;
