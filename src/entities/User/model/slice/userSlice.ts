import {createSlice} from "@reduxjs/toolkit";
import {UserSchema} from "../types/userSchema";

const initialState: UserSchema = {
    isAuth: false,
    currentUserData: {
        _id: '',
        email: '',
        avatar: '',
        full_name: '',
        user_name: '',
        follows: [],
        followers: [],
        isConfirmed: false,
    },
    user: {
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
        setCurrentUser: (state, action) => {
            state.currentUserData = action.payload
        },
        logoutCurrentUser: (state) => {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("user");
            state.isAuth = false
        },
        initCurrentUser: (state) => {
            state.isAuth = true
            state.currentUserData = JSON.parse(localStorage.getItem('user') as string)
        },
        setUserForLook: (state, action) => {
            state.user = action.payload
        },
        setFullName: (state, action) => {
            state.currentUserData.full_name = action.payload
        }
    }
})

export const {reducer: userReducer} = userSlice
export const {actions: userActions} = userSlice
