import React, {useEffect} from 'react';
import {TweetCard} from "widgets/TweetCard";
import {useDispatch, useSelector} from "react-redux";
import {getFeedTweets, getTweets} from "entities/Tweet";

export const Feed = () => {
    const tweets = useSelector(getTweets)
    const dispatch = useDispatch()

    useEffect(() => {
        // @ts-ignore
        dispatch(getFeedTweets())
        console.log('loaded')
    }, [dispatch]);

    return (
        <div>
            {tweets.map(tweet =>
                <TweetCard tweet={tweet} key={tweet._id} />
            )}
        </div>
    );
};

