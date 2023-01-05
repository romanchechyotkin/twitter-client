import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {userActions} from "../../slice/userSlice";

export const getAllUsers = createAsyncThunk(
    "getAllUsers",
    async (userId, thunkAPI) => {
        try {
            const response = await axios.get(`http://localhost:5000/api/user?id=${userId}`);

            thunkAPI.dispatch(userActions.allUsers(response.data))

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue("something get wrong");
        }
    }
);
