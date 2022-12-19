import {StateSchema} from "./StateSchema";
import {configureStore, ReducersMapObject} from "@reduxjs/toolkit";
import {createTweetReducer} from "features/CreateTweet";
import {feedReducer} from "features/Feed";
import {tweetReducer} from "entities/Tweet";
import {userReducer} from "entities/User";
import {loginUserReducer} from "features/LoginUser";

export function createReduxStore(initialState?: StateSchema) {

    const rootReducer: ReducersMapObject<StateSchema> = {
        tweetForm: createTweetReducer,
        feed: feedReducer,
        tweet: tweetReducer,
        user: userReducer,
        loginUser: loginUserReducer
    }

    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: true,
        preloadedState: initialState,
    })

}
