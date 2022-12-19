import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {loginUserActions} from "../../slice/loginUserSlice";

export const checkUserEmail = createAsyncThunk(
    "loginUser/checkUserEmail",
    async (email, thunkAPI) => {
        try {
            const response = await axios.get(`http://localhost:5000/api/auth/checkEmail/${email}`);

            thunkAPI.dispatch(loginUserActions.setEmail(response.data.email))
            thunkAPI.dispatch(loginUserActions.incCurrentStep())

            return response.status
        } catch (e) {
            console.log(e);
            thunkAPI.dispatch(loginUserActions.setEmail(''))
            return thunkAPI.rejectWithValue("something went wrong");
        }
    }
);
