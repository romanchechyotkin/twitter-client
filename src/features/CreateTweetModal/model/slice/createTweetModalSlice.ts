import {createSlice} from "@reduxjs/toolkit";
import {CreateTweetModalSchema} from "../types/CreateTweetSchema";

const initialState: CreateTweetModalSchema = {
    isVisible: false,
    text: '',
    isLoading: false,
};

export const createTweetModalSlice = createSlice({
    name: "createTweetModal",
    initialState,
    reducers: {
        setText: (state, action) => {
            state.text = action.payload
        },
        openCreateTweetModal: (state) => {
            state.isVisible = true
        },
        closeCreateTweetModal: (state) => {
            state.isVisible = false
            document.body.style.overflow = "auto"
        }
    }
});

export const {actions: createTweetModalActions} = createTweetModalSlice;
export const {reducer: createTweetModalReducer} = createTweetModalSlice;
