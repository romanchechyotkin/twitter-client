import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {userActions} from "../../slice/userSlice";

export const followUser = createAsyncThunk(
    "followUser",
    async (userId, thunkAPI) => {
        try {
            const response = await axios.post(`http://localhost:5000/api/user/follow/${userId}`, {}, {
                headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem('accessToken') as string)}`}
            });

            thunkAPI.dispatch(userActions.setCurrentUser(response.data))

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue("something get wrong");
        }
    }
);
