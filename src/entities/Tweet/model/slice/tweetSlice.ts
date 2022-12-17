import {createSlice} from "@reduxjs/toolkit";
import {TweetSchema} from "../types/TweetSchema";

const initialState: TweetSchema = {
    tweet: undefined
}

export const tweetSlice = createSlice({
    name: "tweet",
    initialState,
    reducers: {

    }
})

export const {reducer: tweetReducer} = tweetSlice
export const {actions: tweetActions} = tweetSlice
