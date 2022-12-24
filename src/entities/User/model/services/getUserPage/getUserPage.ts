import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {userActions} from "../../slice/userSlice";

export const getUserPageForLook = createAsyncThunk(
    "getUserPage",
    async (userId, thunkAPI) => {
        try {
            const response = await axios.get(`http://localhost:5000/api/user/${userId}`);

            thunkAPI.dispatch(userActions.setUserForLook(response.data))

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue("something get wrong");
        }
    }
);
