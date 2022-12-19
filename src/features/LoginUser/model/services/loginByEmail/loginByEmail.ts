import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {userActions} from "entities/User";
import {loginUserActions} from "../../slice/loginUserSlice";

export const loginByEmail = createAsyncThunk(
    "loginUser/loginByEmail",
    async ({email, password}: {email: string, password: string}, thunkAPI) => {
        try {
            const response = await axios.post(`http://localhost:5000/api/auth/login`, {email, password});

            localStorage.setItem('user', JSON.stringify(response.data.user))
            localStorage.setItem('accessToken', JSON.stringify(response.data.accessToken))

            thunkAPI.dispatch(userActions.login())
            thunkAPI.dispatch(loginUserActions.closeLoginUser())
            thunkAPI.dispatch(userActions.setUser(response.data.user))

            return response.data
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue("something went wrong");
        }
    }
);
