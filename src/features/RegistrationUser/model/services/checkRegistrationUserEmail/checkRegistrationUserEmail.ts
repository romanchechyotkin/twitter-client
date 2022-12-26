import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {registrationUserActions} from "../../slice/registrationUserSlice";

export const checkRegistrationUserEmail = createAsyncThunk(
    "registrationUser/checkRegistrationUserEmail",
    async (email, thunkAPI) => {
        try {
            const response = await axios.get(`http://localhost:5000/api/auth/checkEmail/${email}`);

            if(response.status === 200) {
                thunkAPI.dispatch(registrationUserActions.setEmail(''))
                return thunkAPI.rejectWithValue("email is used")
            }

            return response.status
        } catch (e) {
            console.log(e);
            thunkAPI.dispatch(registrationUserActions.setEmail(email))
            thunkAPI.dispatch(registrationUserActions.incCurrentStep())
            return thunkAPI.rejectWithValue("something went wrong");
        }
    }
);
