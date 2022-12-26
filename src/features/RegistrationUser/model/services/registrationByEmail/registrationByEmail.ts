import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {registrationUserActions} from "../../slice/registrationUserSlice";
import {userActions} from "../../../../../entities/User";

export const registrationByEmail = createAsyncThunk(
    "registrationUser/registrationByEmail",
    async (
        {email, password, userName, fullName}: {email: string, password: string, userName: string, fullName: string},
        thunkAPI) => {
        try {
            const registrationResponse = await axios.post(`http://localhost:5000/api/auth/registration`, {
                email: email,
                password: password,
                full_name: fullName,
                user_name: userName
            });

            console.log(registrationResponse)

            const loginResponse = await axios.post(`http://localhost:5000/api/auth/login`, {
                email: email,
                password: password,
            })

            localStorage.setItem('accessToken', JSON.stringify(loginResponse.data.accessToken))
            localStorage.setItem('user', JSON.stringify(loginResponse.data.user))

            thunkAPI.dispatch(userActions.login())
            thunkAPI.dispatch(registrationUserActions.closeRegistrationUser())
            thunkAPI.dispatch(userActions.setCurrentUser(loginResponse.data.user))

            return loginResponse.status
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue("something went wrong");
        }
    }
);
