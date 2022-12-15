import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {createTweetActions} from "../../slice/createTweetSlice";
import {tweetActions} from "entities/Tweet";

export const createTweet = createAsyncThunk(
    "createTweet",
    async (text, thunkAPI) => {
        try {
            const response = await axios.post("http://localhost:5000/api/tweet", {text}, {
                headers: {Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOGY4YTA2NjM1ZWFiMmNiMTgzOTBkYiIsImVtYWlsIjoicm9tYW5jaGVjaHlvdGtpbkBnbWFpbC5jb20iLCJ1c2VyX25hbWUiOiJyb21hX2NoYWNob3RrYSIsImZ1bGxfbmFtZSI6ItCg0L7QvNCw0L0g0KfQsNGH0L7RgtC60ZbQvSIsImlhdCI6MTY3MTA4NTU5OSwiZXhwIjoxNjcxMDg2NDk5fQ.KSJBqdTcBZnfA3O3TjO6lmK_BTPoPU0bieRUmhLp5Wo`}
            });

            console.log(response.data) // TODO: delete log
            thunkAPI.dispatch(tweetActions.setLastUserCreatedTweet(response.data))
            thunkAPI.dispatch(createTweetActions.setText(''))

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue("incorrect username or password");
        }
    }
);
