import React from "react";
import AuthForm from "./AuthForm";
import LoginForm from "./LoginForm";

function Login({ setIsNew,isNew }) {
  return (
    <>
      <div className={`lg:w-5/12 w-full h-full flex flex-col lg:justify-between  shadow-sm shadow-[#F66F4D] rounded-lg p-4 transition-all duration-300  ${isNew?"translate-x-full " : " translate-x-0"}`}>
        <div className="w-full 0 h-fit">
         <LoginForm/>
        </div>

        <div className="w-full h-fit py-5 ">
          <p className="w-full h-fit text-center ">
            Forgot Your password?{" "}
            <button className=" hover:text-blue-700 hover:underline ">
              Click Here
            </button>
          </p>
          <p className="w-full h-fit  text-center ">
            First Time Here?{" "}
            <button
              className=" hover:text-blue-700 hover:underline "
              onClick={() => setIsNew(true)}
            >
              {" "}
              Create an account{" "}
            </button>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
