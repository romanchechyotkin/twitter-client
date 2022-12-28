import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {allUserTweetsActions} from "../../slice/allUserTweetsSlice";

export const getAllUserTweetsService = createAsyncThunk(
    "getUserTweets",
    async (userId, thunkAPI) => {
        try {
            const response = await axios.get(`http://localhost:5000/api/tweet/user/${userId}`);

            thunkAPI.dispatch(allUserTweetsActions.setTweets(response.data))

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue("something get wrong");
        }
    }
);
