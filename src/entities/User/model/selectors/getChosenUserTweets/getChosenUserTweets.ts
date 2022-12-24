import {StateSchema} from "app/providers/StoreProvider";

export const getChosenUserTweets = (state: StateSchema) => state.user.chosenUserTweets
