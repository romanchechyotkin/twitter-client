import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {createTweetActions} from "../../slice/createTweetSlice";
import {feedActions} from "features/Feed";
import {createTweetModalActions} from "../../../../CreateTweetModal";

export const createTweet = createAsyncThunk(
    "createTweet",
    async (text, thunkAPI) => {
        try {
            const response = await axios.post("http://localhost:5000/api/tweet", {text}, {
                headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem('accessToken') as string)}`}
            });

            thunkAPI.dispatch(feedActions.setLastUserCreatedTweet(response.data))
            thunkAPI.dispatch(createTweetActions.setText(''))
            thunkAPI.dispatch(createTweetModalActions.setText(''))
            thunkAPI.dispatch(createTweetModalActions.closeCreateTweetModal())

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue("longer than 255 symbols");
        }
    }
);
