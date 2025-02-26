import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../src/firebaseConfig";
import { FcGoogle } from "react-icons/fc";

function GoogleSignup() {
  // 🔹 Handle Google Signup/Login
  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User Info:", user);
      alert(`Welcome, ${user.displayName}`);
    } catch (error) {
      console.error("Google Signup Error:", error);
    }
  };

  return (
    <button
      onClick={handleGoogleSignup}
      className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
    >
      <FcGoogle className="w-5 h-5" />
      Sign up with Google
    </button>
  );
}

export default GoogleSignup;