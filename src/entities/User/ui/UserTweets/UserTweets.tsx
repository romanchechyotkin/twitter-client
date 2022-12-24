import React, {useEffect} from 'react';
import cls from './UserTweets.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {getChosenUserTweets} from "../../model/selectors/getChosenUserTweets/getChosenUserTweets";
import {TweetCard} from "widgets/TweetCard";
import {getUserTweets} from "../../model/services/getUserTweets/getUserTweets";
import {getUserDataForLook} from "../../model/selectors/getUserDataForLook/getUserDataForLook";

export const UserTweets = () => {
    const chosenUser = useSelector(getUserDataForLook)
    const userTweets = useSelector(getChosenUserTweets)
    const dispatch = useDispatch()

    useEffect(() => {
        // @ts-ignore
        dispatch(getUserTweets(chosenUser._id))
    }, [chosenUser._id, dispatch]);

    return (
        <div className={cls.userTweets}>
            <div className={cls.subs}>
                <div
                    className={cls.item}
                >
                    tweets
                </div>
                <div
                    className={cls.item}
                >
                    tweets & replies
                </div>
                <div
                    className={cls.item}
                >
                    media
                </div>
                <div
                    className={cls.item}
                >
                    likes
                </div>
            </div>
            <div className={cls.tweets}>
                {userTweets.map(tweet => <TweetCard tweet={tweet} key={tweet._id} />)}
            </div>
        </div>
    );
};
