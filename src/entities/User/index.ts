import {getUserCurrentData} from "./model/selectors/getUserCurrentData/getUserData";
import {getUserDataForLook} from "./model/selectors/getUserDataForLook/getUserDataForLook";
import {getUserIsAuth} from "./model/selectors/getUserIsAuth/getUserIsAuth";
import {getUserPageForLook} from "./model/services/getUserPage/getUserPage";
import {logoutUser} from "./model/services/logoutUser/logoutUser";
import {userActions, userReducer, userSlice} from "./model/slice/userSlice";
import type {UserSchema, User} from "./model/types/userSchema";
import {UserTweets} from "./ui/UserTweets/UserTweets";
import {followUser} from "./model/services/followUser/followUser";
import {unfollowUser} from "./model/services/unfollowUser/unfollowUser";
import {uploadAvatar} from "./model/services/uploadAvatar/uploadAvatar";
import { updateNames } from "./model/services/updateNames/updateNames";
import { getAllUsers } from "./model/services/getAllUsers/getAllUsers";
import { getUserAllUsers } from "./model/selectors/getUserAllUsers/getUserAllUsers";

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
    followUser,
    unfollowUser,
    uploadAvatar,
    updateNames,
    getAllUsers,
    getUserAllUsers
}
