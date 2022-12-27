import React, {useEffect, useState} from 'react';
import cls from './UserTweets.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {getChosenUserTweets} from "../../model/selectors/getChosenUserTweets/getChosenUserTweets";
import {getUserTweets} from "../../model/services/getUserTweets/getUserTweets";
import {getUserDataForLook} from "../../model/selectors/getUserDataForLook/getUserDataForLook";
import {UserProfileFeed} from "widgets/UserProfileFeed";

export const UserTweets = () => {
    const chosenUser = useSelector(getUserDataForLook)
    const userTweets = useSelector(getChosenUserTweets)
    const [isActiveTweets, setIsActiveTweets] = useState(true);
    const [isActiveReplies, setIsActiveReplies] = useState(false);
    const [isActiveMedia, setIsActiveMedia,] = useState(false);
    const [isActiveLikes, setIsActiveLikes] = useState(false);
    const dispatch = useDispatch()

    useEffect(() => {
        // @ts-ignore
        dispatch(getUserTweets(chosenUser._id))
    }, [chosenUser._id, dispatch]);

    const repliesHandler = () => {
        setIsActiveTweets(false)
        setIsActiveLikes(false)
        setIsActiveMedia(false)
        setIsActiveReplies(true)
    }

    const mediaHandler = () => {
        setIsActiveTweets(false)
        setIsActiveLikes(false)
        setIsActiveMedia(true)
        setIsActiveReplies(false)
    }

    const likesHandler = () => {
        setIsActiveTweets(false)
        setIsActiveLikes(true)
        setIsActiveMedia(false)
        setIsActiveReplies(false)
    }

    const tweetsHandler = () => {
        setIsActiveTweets(true)
        setIsActiveLikes(false)
        setIsActiveMedia(false)
        setIsActiveReplies(false)
    }


    return (
        <div className={cls.userTweets}>
            <div className={cls.subs}>
                <div
                    className={cls.item}
                    style={{borderBottom: isActiveTweets ? `2px solid blue` : "none" }}
                    onClick={tweetsHandler}
                >
                    tweets
                </div>
                <div
                    className={cls.item}
                    onClick={repliesHandler}
                    style={{borderBottom: isActiveReplies ? `2px solid blue` : "none" }}
                >
                    tweets & replies
                </div>
                <div
                    className={cls.item}
                    style={{borderBottom: isActiveMedia ? `2px solid blue` : "none" }}
                    onClick={mediaHandler}
                >
                    media
                </div>
                <div
                    className={cls.item}
                    style={{borderBottom: isActiveLikes ? `2px solid blue` : "none" }}
                    onClick={likesHandler}
                >
                    likes
                </div>
            </div>
            <div className={cls.tweets}>
                <UserProfileFeed tweets={userTweets} />
            </div>
        </div>
    );
};
