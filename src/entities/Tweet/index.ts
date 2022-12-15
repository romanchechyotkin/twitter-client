import { getTweets } from "./model/selectors/getTweets/getTweets";
import { getFeedTweets } from "./model/services/getFeedTweets/getFeedTweets";
import {tweetActions, tweetReducer, tweetSlice } from "./model/slice/tweetSlice";
import {Tweet, TweetSchema} from "./model/types/TweetSchema";

export type {
    Tweet, TweetSchema
}

export {
    tweetSlice,
    tweetActions,
    tweetReducer,
    getTweets,
    getFeedTweets
}
