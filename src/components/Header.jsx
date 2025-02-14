import {  signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();
  const handleSignOut =()=>{
    signOut(auth)
    .then(() => {
      navigate("/");
    }).catch((error) => {
      navigate("/error")
    });
  }
  return (
   <div className="absolute w-screen px-16 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
    <img className=" w-44 "
     src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
    alt="logo" />

    <div className="flex p-2">
      <img 
      className="w-10 h-10 object-cover" 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8lac4EK1ITMI-QvepqtZSMBXphoWEEoB6YOF8ne8O9qijUv4uDP4t9ig&s" alt="usericon" />
      <button onClick={handleSignOut}
       className="text-white font-bold cursor-">(Sign Out)</button>
    </div>
   </div>
  )
}

export default Header
