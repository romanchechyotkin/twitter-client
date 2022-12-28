import {StateSchema} from "app/providers/StoreProvider";

export const getAllUserTweets = (state: StateSchema) => state.allUserTweets.tweets
