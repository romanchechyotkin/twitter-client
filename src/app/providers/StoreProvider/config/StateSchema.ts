import {CreateTweetSchema} from "features/CreateTweet";
import {FeedSchema} from "features/Feed/model/types/feedSchema";
import {TweetSchema} from "entities/Tweet";
import {UserSchema} from "entities/User";

export interface StateSchema {
    tweetForm: CreateTweetSchema,
    feed: FeedSchema,
    tweet: TweetSchema,
    user: UserSchema
}
