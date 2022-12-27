import React from 'react';
import {Tweet} from "entities/Tweet";
import {TweetCard} from "../../TweetCard";

export interface UserProfileFeedProps {
    tweets: Tweet[]
}

export const UserProfileFeed: React.FC<UserProfileFeedProps> = ({tweets}) => {
    return (
        <div>
            {tweets.map(tweet => <TweetCard tweet={tweet} key={tweet._id} />)}
        </div>
    );
};
