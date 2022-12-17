import { getUserIsAuth } from "./model/selectors/getUserIsAuth/getUserIsAuth";
import {userActions, userReducer, userSlice } from "./model/slice/userSlice";
import type {UserSchema} from "./model/types/userSchema";

export {
    UserSchema,
    userSlice,
    userActions,
    userReducer,
    getUserIsAuth
}
