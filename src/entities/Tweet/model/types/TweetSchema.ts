import {User} from "entities/User";

export interface TweetSchema {
    tweet?: Tweet;
}

export interface Tweet {
    _id: string;
    text: string;
    user: User
    date: string;
    replies: any[],
    retweets: any[],
    likes: any[]
}
