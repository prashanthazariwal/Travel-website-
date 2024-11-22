import { configureStore } from "@reduxjs/toolkit";
import UsersReducer from "../features/user/UserSlice";

export const store = configureStore({
    reducer : {
        users : UsersReducer
    }
})