import {createSlice} from "@reduxjs/toolkit";
import {UserSchema} from "../types/userSchema";

const initialState: UserSchema = {
    isAuth: false,
    userData: {
        _id: '',
        email: '',
        avatar: '',
        full_name: '',
        user_name: '',
        follows: [],
        followers: [],
        isConfirmed: false,
    }
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: state => {state.isAuth = true},
        logout: state => {state.isAuth = false},
        setUser: (state, action) => {
            state.userData = action.payload
        },
        logoutUser: (state) => {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("user");
            state.isAuth = false
        },
        initUser: (state) => {
            state.isAuth = true
            state.userData = JSON.parse(localStorage.getItem('user') as string)
        }
    }
})

export const {reducer: userReducer} = userSlice
export const {actions: userActions} = userSlice
