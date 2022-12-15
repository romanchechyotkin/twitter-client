import {StateSchema} from "./StateSchema";
import {configureStore, ReducersMapObject} from "@reduxjs/toolkit";
import {createTweetReducer} from "features/CreateTweet";
import {tweetReducer} from "entities/Tweet";

export function createReduxStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        tweetForm: createTweetReducer,
        tweet: tweetReducer
    }

    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: true,
        preloadedState: initialState
    })

}
