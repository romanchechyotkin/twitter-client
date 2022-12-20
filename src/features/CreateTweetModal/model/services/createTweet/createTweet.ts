import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {createTweetModalActions} from "../../slice/createTweetModalSlice";
import {feedActions} from "features/Feed";

export const createTweet = createAsyncThunk(
    "createTweet",
    async (text, thunkAPI) => {
        try {
            const response = await axios.post("http://localhost:5000/api/tweet", {text}, {
                headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem('accessToken') as string)}`}
            });

            thunkAPI.dispatch(feedActions.setLastUserCreatedTweet(response.data))
            thunkAPI.dispatch(createTweetModalActions.setText(''))

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue("longer than 200 symbols");
        }
    }
);
