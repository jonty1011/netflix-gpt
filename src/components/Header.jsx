import {  signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/UserSlice";


const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user) 
  const dispatch = useDispatch()
  const handleSignOut =()=>{
    signOut(auth)
    .then(() => {
      const {uid , email, displayName, photoURL} = auth.currentUser;
                                                // we did this becoz we want auth.currentUser we want to see the updated value
      // this all data will not come from the user which is there above the data that didnot updated it will come from the auth --> and this auth is an utility function
       // if we write this user it is not updated value  the user is unupdated value so we will want new auth information and we will get from auth;
    // getting auth from the getAuth() in firebase.js

                dispatch(
                  addUser({
                    uid:uid , 
                email:email , 
                displayName:displayName,
               photoURL:photoURL, 
               })
              );
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

   { user &&( <div className="flex p-2">
      <img 
      className="w-10 h-10 object-cover" 
      src={user?.photoURL} alt="usericon" />
      <button onClick={handleSignOut}
       className="text-white font-bold cursor-">(Sign Out)</button>
    </div>)}
   </div>
  )
}

export default Header
