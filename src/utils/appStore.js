//This function creates and configures the Redux store.
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";

//we are creating a Redux store using configureStore()
 const appStore = configureStore({
    reducer:{
        user: userReducer,
    },
 });

 export default appStore;