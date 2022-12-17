import {createSlice} from "@reduxjs/toolkit";
import {UserSchema} from "../types/userSchema";

const initialState: UserSchema = {
    isAuth: true,

}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    }
})

export const {reducer: userReducer} = userSlice
export const {actions: userActions} = userSlice
