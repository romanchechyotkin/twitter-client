import React, {useEffect, useState} from 'react';
import cls from './UserTweets.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {getUserDataForLook} from "../../model/selectors/getUserDataForLook/getUserDataForLook";
import {
    allUserTweetsActions,
    getAllUserTweets,
    getAllUserTweetsIsVisible,
    getAllUserTweetsService,
    UserProfileFeed
} from "features/AllUserTweets";

export const UserTweets = () => {
    const chosenUser = useSelector(getUserDataForLook)
    const userTweets = useSelector(getAllUserTweets)
    const allUserTweetsIsVisible = useSelector(getAllUserTweetsIsVisible)
    const [isActiveReplies, setIsActiveReplies] = useState(false);
    const [isActiveMedia, setIsActiveMedia,] = useState(false);
    const [isActiveLikes, setIsActiveLikes] = useState(false);
    const dispatch = useDispatch()

    useEffect(() => {
        // @ts-ignore
        dispatch(getAllUserTweetsService(chosenUser._id))
    }, [chosenUser._id, dispatch]);

    const tweetsHandler = () => {
        dispatch(allUserTweetsActions.open())
        setIsActiveLikes(false)
        setIsActiveMedia(false)
        setIsActiveReplies(false)
    }

    const repliesHandler = () => {
        dispatch(allUserTweetsActions.close())
        setIsActiveLikes(false)
        setIsActiveMedia(false)
        setIsActiveReplies(true)
    }

    const mediaHandler = () => {
        dispatch(allUserTweetsActions.close())
        setIsActiveLikes(false)
        setIsActiveMedia(true)
        setIsActiveReplies(false)
    }

    const likesHandler = () => {
        dispatch(allUserTweetsActions.close())
        setIsActiveLikes(true)
        setIsActiveMedia(false)
        setIsActiveReplies(false)
    }

    return (
        <div className={cls.userTweets}>
            <div className={cls.subs}>
                <div
                    className={cls.item}
                    style={{borderBottom: allUserTweetsIsVisible ? `2px solid blue` : "none" }}
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
                {allUserTweetsIsVisible && <UserProfileFeed tweets={userTweets}/>}
            </div>
        </div>
    );
};
