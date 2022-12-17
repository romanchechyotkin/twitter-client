import {createSlice} from "@reduxjs/toolkit";
import {getFeedTweets} from "features/Feed/model/services/getFeedTweets/getFeedTweets";
import {FeedSchema} from "../types/feedSchema";

const initialState: FeedSchema = {
    tweets: [],
    loading: false
}

export const feedSlice = createSlice({
    name: "feed",
    initialState,
    reducers: {
        setTweets: (state, action) => {
            state.tweets = action.payload
        },
        setLastUserCreatedTweet: (state, action) => {
            state.tweets.unshift(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getFeedTweets.pending, (state) => {
                state.loading = true;
                state.error = undefined;
            })
            .addCase(getFeedTweets.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(getFeedTweets.rejected, (state, action) => {
                state.loading = false;
                // @ts-ignore
                state.error = action.payload;
            });
    },
})

export const {reducer: feedReducer} = feedSlice
export const {actions: feedActions} = feedSlice
