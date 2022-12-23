import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {userActions} from "../../slice/userSlice";
import {createTweetActions} from "features/CreateTweet";
import {createTweetModalActions} from "features/CreateTweetModal";

export const logoutUser = createAsyncThunk(
    "logoutUser",
    async (_, thunkAPI) => {
        try {
            const response = await axios.post("http://localhost:5000/api/auth/logout", {}, {});

            thunkAPI.dispatch(createTweetActions.setText(''))
            thunkAPI.dispatch(createTweetModalActions.setText(''))
            thunkAPI.dispatch(userActions.logoutCurrentUser())

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue("incorrect username or password");
        }
    }
);
