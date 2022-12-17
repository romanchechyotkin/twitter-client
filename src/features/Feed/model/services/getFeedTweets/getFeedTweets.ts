import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {Tweet} from "entities/Tweet/model/types/TweetSchema";
import {feedActions} from "../../slice/feedSlice";

export const getFeedTweets = createAsyncThunk(
    "feed/getFeedTweets",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<Tweet[]>("http://localhost:5000/api/tweet");

            thunkAPI.dispatch(feedActions.setTweets(response.data))

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue("something went wrong");
        }
    }
);
