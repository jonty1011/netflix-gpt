import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/638e9299-0637-42d1-ba39-54ade4cf2bf6/web/IN-en-20250203-TRIFECTA-perspective_46eb8857-face-4ea6-b901-dbf22b461369_large.jpg"
          alt="Background-image"
        />
      </div>
      <form className="w-3/12 absolute p-12  bg-black/80  text-white my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80 ">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm &&<input
          type="text"
          placeholder="Enter Full Name"
          className="p-2 my-4 w-full bg-gray-800 "
        />}
        <input
          type="email"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-800 border-red-700"
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="p-2 my-4 w-full bg-gray-800 "
        />

        <button className="p-4 my-6  bg-red-700 w-full  hover:bg-red-500 rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSignInForm} className="py-4 cursor-pointer">
          {isSignInForm
            ? "New to Netflix ? Sign Up Now "
            : "Already registered ? Sign In Now "}{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
