import {createSlice} from "@reduxjs/toolkit";
import {TweetSchema} from "../types/TweetSchema";

const initialState: TweetSchema = {
    tweets: []
}

export const tweetSlice = createSlice({
    name: "tweet",
    initialState,
    reducers: {
        setTweets: (state, action) => {
            state.tweets = action.payload
        },
        setLastUserCreatedTweet: (state, action) => {
            state.tweets.unshift(action.payload)
        }
    }
})

export const {reducer: tweetReducer} = tweetSlice
export const {actions: tweetActions} = tweetSlice
