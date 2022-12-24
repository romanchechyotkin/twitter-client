import { getChosenUserTweets } from "./model/selectors/getChosenUserTweets/getChosenUserTweets";
import {getUserCurrentData} from "./model/selectors/getUserCurrentData/getUserData";
import { getUserDataForLook } from "./model/selectors/getUserDataForLook/getUserDataForLook";
import { getUserIsAuth } from "./model/selectors/getUserIsAuth/getUserIsAuth";
import { getUserPageForLook } from "./model/services/getUserPage/getUserPage";
import { getUserTweets } from "./model/services/getUserTweets/getUserTweets";
import { logoutUser } from "./model/services/logoutUser/logoutUser";
import {userActions, userReducer, userSlice } from "./model/slice/userSlice";
import type {UserSchema, User} from "./model/types/userSchema";
import { UserTweets } from "./ui/UserTweets/UserTweets";

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
    User,
    UserTweets,
    getChosenUserTweets,
    getUserTweets
}
