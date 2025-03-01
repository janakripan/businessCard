import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SignUp from "./SignUp";
import Login from "./Login";
import loginbg from "../../Assets/Login-amico.png";
import Signupbg from "../../Assets/Telecommuting-rafiki.png";
import { useLocation, useNavigate } from "react-router";

function AuthHome() {
  const location = useLocation();
  const navigate = useNavigate();

  

  const isNew = location.pathname.includes("/signup");

  const toggleAuth = () => {
    navigate(isNew ? "/authentication/authome/login" : "/authentication/authome/signup");
  };
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
        <div className="w-11/12 h-fit lg:h-fit lg:py-52 xl:h-full xl:py-10 items-center  shadow-lg relative overflow-hidden bg-gray-50 transition-all duration-300 p-0 lg:p-6 ">
          <AnimatePresence mode="wait">
            {isNew ? (
              <div className="w-[50%] h-fit absolute right-0 xl:top-0">
                <img
                src={Signupbg}
                alt=""
                className="object-contain w-0 lg:w-full   "
              />

              </div>
            ) : (
              <img
                src={loginbg}
                alt=""
                className="object-contain w-0 lg:w-[50%] absolute right-0 xl:top-10  "
              />
            )}
          </AnimatePresence>
          <AnimatePresence mode="wait">
            {isNew ? (
              <motion.div
                key="signup"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <SignUp setIsNew={toggleAuth} isNew={isNew} />
              </motion.div>
            ) : (
              <motion.div
                key="login"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
              >
                <Login setIsNew={toggleAuth} isNew={isNew} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default AuthHome;
