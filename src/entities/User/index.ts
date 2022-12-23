import {getUserCurrentData} from "./model/selectors/getUserCurrentData/getUserData";
import { getUserDataForLook } from "./model/selectors/getUserDataForLook/getUserDataForLook";
import { getUserIsAuth } from "./model/selectors/getUserIsAuth/getUserIsAuth";
import { getUserPageForLook } from "./model/services/getUserPage/getUserPage";
import { logoutUser } from "./model/services/logoutUser/logoutUser";
import {userActions, userReducer, userSlice } from "./model/slice/userSlice";
import type {UserSchema, User} from "./model/types/userSchema";

export {
    UserSchema,
    userSlice,
    userActions,
    userReducer,
    getUserIsAuth,
    getUserCurrentData,
    getUserDataForLook,
    getUserPageForLook,
    logoutUser,
    User
}
