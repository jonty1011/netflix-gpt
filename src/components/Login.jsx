import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {auth} from "../utils/Firebase";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const[errorMessage,setErrorMessage] =useState(null);
  const [errorFields , setErrorFields] = useState({name:false , password:false});
  const navigate = useNavigate();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);   
  
  const handleButtonClick = () => {
    // validate the form data
    //checkValidData()
   // console.log(email); 
    //console.log(password);
    const msg =  checkValidData(name.current ? name.current.value : "",
      email.current.value,

      
      password.current.value,
     isSignInForm )
    setErrorMessage(msg);  
    
    
// Here identify which field cause error
setErrorFields({
  //Checks if the error message contains "Name"
  name:!isSignInForm && msg?.includes("Name"),
  email:msg?.includes("Email"),
  password:msg?.includes("Password"),
});

  if(!isSignInForm){
     // SignUp Form  Logic 
     createUserWithEmailAndPassword( 
      auth,
      email.current.value,
      password.current.value)
  .then((userCredential) => {
    
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current?.value, photoURL: "https://avatars.githubusercontent.com/u/82377026?s=400&u=894c5c9fc299c33841ff15002b50012696639304&v=4"
    }).then(() => {
       navigate("/browse");
      // ...
    }).catch((error) => {
       setErrorMessage(error.message);
    });
    console.log(user);
  
    
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
      setErrorMessage(errorCode + "-" + errorMessage);
  });
  }else{
    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value)
    .then((userCredential) => {
      
      const user = userCredential.user;
       console.log(user);
       navigate("/browse");
       
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
       setErrorMessage(errorCode + "-" + errorMessage);
      
    });
  }
  }

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
      <form onSubmit={((e)=>e.preventDefault())}
      className="max-w-md w-full sm:w-3/5 md:w-2/5 lg:w-3/12 absolute p-8 bg-black/80 text-white my-20 mx-auto right-0 left-0 rounded-lg">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm &&<input
        ref={name}
          type="text"
          placeholder="Enter Full Name"
          className={`p-2 my-4 w-full bg-gray-800 border-2 ${errorFields.name ? "border-red-500":"border-gray-700"} `}
        />}
        <input
        ref={email}
          type="email"
          placeholder="Email Address"
          className={`p-2 my-4 w-full bg-gray-800 border-2 ${errorFields.email ? "border-red-500":"border-gray-700"} `}
          />
        <input
        ref={password}
          type="password"
          placeholder="Enter Password"
          className={`p-2 my-4 w-full bg-gray-800 border-2 ${errorFields.password ? "border-red-500":"border-gray-700"} `}
          />
        

          
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>

        <button onClick={handleButtonClick}
        className="p-4 my-6  bg-red-700 w-full  hover:bg-red-500 rounded-lg">
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
