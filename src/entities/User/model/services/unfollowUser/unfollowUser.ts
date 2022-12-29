import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {userActions} from "../../slice/userSlice";

export const unfollowUser = createAsyncThunk(
    "unfollowUser",
    async (userId, thunkAPI) => {
        try {
            const response = await axios.post(`http://localhost:5000/api/user/unfollow/${userId}`, {}, {
                headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem('accessToken') as string)}`}
            });

            thunkAPI.dispatch(userActions.setCurrentUser(response.data))
            localStorage.setItem('user', JSON.stringify(response.data))

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue("something get wrong");
        }
    }
);
