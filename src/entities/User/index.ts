import { getUserData } from "./model/selectors/getUserData/getUserData";
import { getUserIsAuth } from "./model/selectors/getUserIsAuth/getUserIsAuth";
import {userActions, userReducer, userSlice } from "./model/slice/userSlice";
import type {UserSchema, User} from "./model/types/userSchema";

export {
    UserSchema,
    userSlice,
    userActions,
    userReducer,
    getUserIsAuth,
    getUserData,
    User
}
