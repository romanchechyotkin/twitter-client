import {createSlice} from "@reduxjs/toolkit";
import {RegistrationUserSchema} from "../types/registrationUserSchema";
import {checkRegistrationUserEmail} from "../services/checkRegistrationUserEmail/checkRegistrationUserEmail";
import {registrationByEmail} from "../services/registrationByEmail/registrationByEmail";

const initialState: RegistrationUserSchema = {
    isVisible: false,
    email: '',
    password: '',
    fullName: '',
    userName: '',
    isLoading: false,
    currentStep: 0,
};

export const registrationUserSlice = createSlice({
    name: "registration user",
    initialState,
    reducers: {
        openRegistrationUser: state => {state.isVisible = true},
        closeRegistrationUser: state => {
            state.isVisible = false
            document.body.style.overflow = "auto"
        },
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setPassword: (state, action) => {
            state.password = action.payload
        },
        setFullName: (state, action) => {
            state.fullName = action.payload
        },
        setUserName: (state, action) => {
            state.userName = action.payload
        },
        incCurrentStep: (state) => {state.currentStep++},
        decCurrentStep: (state) => {state.currentStep--},
        resetCurrentStep: (state) => {state.currentStep = 0}
    },
    extraReducers: (builder) => {
        builder
            .addCase(checkRegistrationUserEmail.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(checkRegistrationUserEmail.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(checkRegistrationUserEmail.rejected, (state, action) => {
                state.isLoading = false;
                // @ts-ignore
                state.error = action.payload;
            })
            .addCase(registrationByEmail.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(registrationByEmail.fulfilled, (state) => {
                state.isLoading = false;
                state.password = '';
                state.email = '';
                state.fullName = '';
                state.userName = '';
                state.currentStep = 0;
            })
            .addCase(registrationByEmail.rejected, (state, action) => {
                state.isLoading = false;
                // @ts-ignore
                state.error = action.payload;
                state.password = ''
                state.password = '';
                state.email = '';
                state.fullName = '';
                state.userName = '';
                state.currentStep = 0;
                state.isVisible = false

            });
    },
});

export const {actions: registrationUserActions} = registrationUserSlice;
export const {reducer: registrationUserReducer} = registrationUserSlice;
