import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {userActions} from "../../slice/userSlice";

export const logoutUser = createAsyncThunk(
    "logoutUser",
    async (_, thunkAPI) => {
        try {
            const response = await axios.post("http://localhost:5000/api/auth/logout", {}, {});
            thunkAPI.dispatch(userActions.logoutUser())

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue("incorrect username or password");
        }
    }
);
