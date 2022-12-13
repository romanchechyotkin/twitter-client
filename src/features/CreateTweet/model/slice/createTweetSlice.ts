import {createSlice} from "@reduxjs/toolkit";
import {CreateTweetSchema} from "../types/CreateTweetSchema";
import {createTweet} from "../services/createTweet/createTweet";

const initialState: CreateTweetSchema = {
    text: '',
    isLoading: false,
};

export const createTweetSlice = createSlice({
    name: "create tweet",
    initialState,
    reducers: {
        setText: (state, action) => {
            state.text = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createTweet.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(createTweet.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(createTweet.rejected, (state, action) => {
                state.isLoading = false;
                // @ts-ignore
                state.error = action.payload;
            });
    },
});

export const {actions: createTweetActions} = createTweetSlice;
export const {reducer: createTweetReducer} = createTweetSlice;
