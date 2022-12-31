import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {userActions} from "../../slice/userSlice";

export const uploadAvatar = createAsyncThunk(
    "uploadAvatar",
    async (file, thunkAPI) => {
        try {
            const formData = new FormData()
            // @ts-ignore
            formData.append('file', file)

            const response = await axios.post(`http://localhost:5000/api/user/avatar`, formData, {
                headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem('accessToken') as string)}`}
            });

            thunkAPI.dispatch(userActions.setCurrentUser(response.data))
            localStorage.setItem('user', JSON.stringify(response.data))

        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue("something get wrong");
        }
    }
);
