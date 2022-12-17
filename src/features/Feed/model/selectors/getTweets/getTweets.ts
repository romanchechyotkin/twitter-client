import {StateSchema} from "app/providers/StoreProvider";

export const getTweets = (state: StateSchema) => state.feed.tweets
