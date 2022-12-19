import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {createTweetActions} from "../../slice/createTweetSlice";
import {feedActions} from "features/Feed";

export const createTweet = createAsyncThunk(
    "createTweet",
    async (text, thunkAPI) => {
        try {
            const response = await axios.post("http://localhost:5000/api/tweet", {text}, {
                headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem('accessToken') as string)}`}
            });

            thunkAPI.dispatch(feedActions.setLastUserCreatedTweet(response.data))
            thunkAPI.dispatch(createTweetActions.setText(''))

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue("incorrect username or password");
        }
    }
);
