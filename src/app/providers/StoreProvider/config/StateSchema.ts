import {CreateTweetSchema} from "features/CreateTweet";
import {FeedSchema} from "features/Feed/model/types/feedSchema";
import {TweetSchema} from "entities/Tweet";
import {UserSchema} from "entities/User";
import {LoginUserSchema} from "features/LoginUser";
import {CreateTweetModalSchema} from "features/CreateTweetModal";

export interface StateSchema {
    tweetForm: CreateTweetSchema,
    tweetFormModal: CreateTweetModalSchema
    feed: FeedSchema,
    tweet: TweetSchema,
    user: UserSchema,
    loginUser: LoginUserSchema
}
