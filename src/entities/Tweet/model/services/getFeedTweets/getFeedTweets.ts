import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {Tweet} from "../../types/TweetSchema";
import {tweetActions} from "../../slice/tweetSlice";

export const getFeedTweets = createAsyncThunk(
    "feed/getFeedTweets",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<Tweet[]>("http://localhost:5000/api/tweet");

            thunkAPI.dispatch(tweetActions.setTweets(response.data))

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue("something went wrong");
        }
    }
);
