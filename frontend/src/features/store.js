import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice"
import apptReducer from './appt/apptSlice'

const store = configureStore({
    reducer:{
        auth:authReducer,
        appt:apptReducer
    }
})


export default store