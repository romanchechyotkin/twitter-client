export interface TweetSchema {
    tweets: Tweet[]
}

export interface Tweet {
    _id: string;
    text: string;
    user: {
        avatar: string,
        full_name: string,
        user_name: string,
    }
    date: string;
    replies: any[],
    retweets: any[],
    likes: any[]
}
