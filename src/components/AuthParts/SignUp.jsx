import React from "react";

import AuthForm from "./AuthForm";


function SignUp({setIsNew}) {
  return (
    <>
      <div className={`lg:w-5/12 w-full h-full bg-white lg:justify-between flex flex-col shadow-sm shadow-[#F66F4D] rounded-lg p-4 `}>
      <div className="w-full  h-fit">
         <AuthForm />
      </div>
      <p className="w-full h-fit py-5 text-center ">
        Already have an account? <button className=" hover:text-blue-700 hover:underline " onClick={setIsNew} > Login </button>
      </p>
       
      </div>

    </>
  );
}

export default SignUp;
