import React, {useEffect} from 'react';
import {TweetCard} from "widgets/TweetCard";
import {useDispatch, useSelector} from "react-redux";
import {getFeedTweets} from "../model/services/getFeedTweets/getFeedTweets";
import {getTweets} from "../model/selectors/getTweets/getTweets";
import cls from './Feed.module.scss'

export const Feed = () => {
    const tweets = useSelector(getTweets)
    const dispatch = useDispatch()

    useEffect(() => {
        // @ts-ignore
        dispatch(getFeedTweets())
    }, [dispatch]);

    return (
        <div className={cls.feed}>
            {tweets.map(tweet =>
                <TweetCard tweet={tweet} key={tweet._id} />
            )}
        </div>
    );
};

