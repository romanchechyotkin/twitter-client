import {CreateTweetSchema} from "features/CreateTweet";
import {TweetSchema} from "entities/Tweet";

export interface StateSchema {
    tweetForm: CreateTweetSchema,
    tweet: TweetSchema
}
