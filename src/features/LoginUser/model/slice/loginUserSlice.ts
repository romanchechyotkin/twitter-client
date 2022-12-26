import {createSlice} from "@reduxjs/toolkit";
import {LoginUserSchema} from "../types/loginUserSchema";
import {checkLoginUserEmail} from "../services/checkUserEmail/checkUserEmail";
import {loginByEmail} from "../services/loginByEmail/loginByEmail";

const initialState: LoginUserSchema = {
    isVisible: false,
    email: '',
    password: '',
    isLoading: false,
    currentStep: 0,
};

export const loginUserSlice = createSlice({
    name: "login user",
    initialState,
    reducers: {
        openLoginUser: state => {state.isVisible = true},
        closeLoginUser: state => {
            state.isVisible = false
            document.body.style.overflow = "auto"
        },
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setPassword: (state, action) => {
            state.password = action.payload
        },
        incCurrentStep: (state) => {state.currentStep++},
        resetCurrentStep: (state) => {state.currentStep = 0}
    },
    extraReducers: (builder) => {
        builder
            .addCase(checkLoginUserEmail.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(checkLoginUserEmail.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(checkLoginUserEmail.rejected, (state, action) => {
                state.isLoading = false;
                // @ts-ignore
                state.error = action.payload;
            })
            .addCase(loginByEmail.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(loginByEmail.fulfilled, (state) => {
                state.isLoading = false;
                state.password = '';
                state.email = '';
                state.currentStep = 0;
            })
            .addCase(loginByEmail.rejected, (state, action) => {
                state.isLoading = false;
                // @ts-ignore
                state.error = action.payload;
                state.password = ''
            });
    },
});

export const {actions: loginUserActions} = loginUserSlice;
export const {reducer: loginUserReducer} = loginUserSlice;
