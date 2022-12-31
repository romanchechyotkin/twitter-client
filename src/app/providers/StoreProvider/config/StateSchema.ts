import {CreateTweetSchema} from "features/CreateTweet";
import {FeedSchema} from "features/Feed/model/types/feedSchema";
import {TweetSchema} from "entities/Tweet";
import {UserSchema} from "entities/User";
import {LoginUserSchema} from "features/LoginUser";
import {CreateTweetModalSchema} from "features/CreateTweetModal";
import {RegistrationUserSchema} from "features/RegistrationUser";
import {AllUserTweetsSchema} from "features/AllUserTweets";

export interface StateSchema {
    user: UserSchema;
    tweet: TweetSchema;
    feed: FeedSchema;
    tweetForm: CreateTweetSchema;
    tweetFormModal: CreateTweetModalSchema;
    registrationUser: RegistrationUserSchema;
    allUserTweets: AllUserTweetsSchema;
    loginUser: LoginUserSchema,
}
