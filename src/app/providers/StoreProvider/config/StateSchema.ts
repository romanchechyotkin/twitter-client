import {CreateTweetSchema} from "features/CreateTweet";
import {FeedSchema} from "features/Feed/model/types/feedSchema";
import {TweetSchema} from "entities/Tweet";
import {UserSchema} from "entities/User";
import {LoginUserSchema} from "features/LoginUser";

export interface StateSchema {
    tweetForm: CreateTweetSchema,
    feed: FeedSchema,
    tweet: TweetSchema,
    user: UserSchema,
    loginUser: LoginUserSchema
}
