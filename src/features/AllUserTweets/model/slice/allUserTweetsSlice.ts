import {createSlice} from "@reduxjs/toolkit";
import {AllUserTweetsSchema} from "../types/allUserTweetsSchema";
import {getAllUserTweetsService} from "../services/getAllUserTweetsService/getAllUserTweetsService";

const initialState: AllUserTweetsSchema = {
    isVisible: true,
    isLoading: false,
    tweets: []
};

export const allUserTweetsSlice = createSlice({
    name: "all user tweets",
    initialState,
    reducers: {
        open: (state) => {
            state.isVisible = true
        },
        close: (state) => {
            state.isVisible = false
        },
        setTweets: (state, action) => {
            state.tweets = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllUserTweetsService.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllUserTweetsService.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(getAllUserTweetsService.rejected, (state) => {
                state.isLoading = false;
            });
    },
});

export const {actions: allUserTweetsActions} = allUserTweetsSlice;
export const {reducer: allUserTweetsReducer} = allUserTweetsSlice;
