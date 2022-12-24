import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {userActions} from "../../slice/userSlice";

export const getUserTweets = createAsyncThunk(
    "getUserTweets",
    async (userId, thunkAPI) => {
        try {
            const response = await axios.get(`http://localhost:5000/api/tweet/user/${userId}`);

            thunkAPI.dispatch(userActions.setChosenUserTweets(response.data))

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue("something get wrong");
        }
    }
);
