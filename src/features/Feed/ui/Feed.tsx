import React, {useEffect} from 'react';
import {TweetCard} from "widgets/TweetCard";
import {useDispatch, useSelector} from "react-redux";
import {getFeedTweets} from "../model/services/getFeedTweets/getFeedTweets";
import {getTweets} from "../model/selectors/getTweets/getTweets";
import cls from './Feed.module.scss'
import {getFeedLoading} from "../model/selectors/getFeedLoading/getFeedLoading";
import {Loader} from "../../../shared/ui/Loader/Loader";

export const Feed = () => {
    const tweets = useSelector(getTweets)
    const isLoading = useSelector(getFeedLoading)
    const dispatch = useDispatch()

    useEffect(() => {
        // @ts-ignore
        dispatch(getFeedTweets())
    }, [dispatch]);

    return (isLoading ? <Loader /> :
        <div className={cls.feed}>
            {tweets.map(tweet =>
                <TweetCard tweet={tweet} key={tweet._id} />
            )}
        </div>
    );
};

