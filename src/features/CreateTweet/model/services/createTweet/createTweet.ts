import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {createTweetActions} from "../../slice/createTweetSlice";

export const createTweet = createAsyncThunk(
    "createTweet",
    async (text, thunkAPI) => {
        try {
            const response = await axios.post("http://localhost:5000/api/tweet", {text}, {
                headers: {Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOGY4YTA2NjM1ZWFiMmNiMTgzOTBkYiIsImVtYWlsIjoicm9tYW5jaGVjaHlvdGtpbkBnbWFpbC5jb20iLCJ1c2VyX25hbWUiOiJyb21hX2NoYWNob3RrYSIsImZ1bGxfbmFtZSI6ItCg0L7QvNCw0L0g0KfQsNGH0L7RgtC60ZbQvSIsImlhdCI6MTY3MDk1NDQ1OSwiZXhwIjoxNjcwOTU1MzU5fQ.g1_MUxEF93Yg8t2PSkRno65BhfJN_FnU7dRR4k6DXgo`}
            });

            console.log(response.data)
            thunkAPI.dispatch(createTweetActions.setText(''))

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue("incorrect username or password");
        }
    }
);
