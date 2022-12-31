import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {userActions} from "../../slice/userSlice";

export const updateNames = createAsyncThunk(
    "updateNames",
    async ({fullName, userName}: {fullName: string, userName: string}, thunkAPI) => {
        try {
            const response = await axios.patch(`http://localhost:5000/api/user`, {
                full_name: fullName,
                user_name: userName
            }, {
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
