import {configureStore, ReducersMapObject} from "@reduxjs/toolkit";
import {StateSchema} from "./StateSchema";
import {createTweetReducer} from "features/CreateTweet";
import {feedReducer} from "features/Feed";
import {tweetReducer} from "entities/Tweet";
import {userReducer} from "entities/User";
import {createTweetModalReducer} from "features/CreateTweetModal";
import {registrationUserReducer} from "features/RegistrationUser";
import {allUserTweetsReducer} from "features/AllUserTweets";
import {loginUserReducer} from "../../../../features/LoginUser";

export function createReduxStore(initialState?: StateSchema) {

    const rootReducers: ReducersMapObject<StateSchema> = {
        user: userReducer,
        tweet: tweetReducer,
        allUserTweets: allUserTweetsReducer,
        registrationUser: registrationUserReducer,
        loginUser: loginUserReducer,
        feed: feedReducer,
        tweetFormModal: createTweetModalReducer,
        tweetForm: createTweetReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: true,
        preloadedState: initialState,
    })
}
