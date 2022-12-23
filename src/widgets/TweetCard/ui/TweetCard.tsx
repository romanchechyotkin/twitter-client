import React from 'react';
import cls from './TweetCard.module.scss'
import {AppLink} from "shared/ui/AppLink/AppLink";
import {LikeIcon} from "shared/assets/icons/LikeIcon";
import {ReplyIcon} from "shared/assets/icons/ReplyIcon";
import {RetweetIcon} from "shared/assets/icons/RetweetIcon";
import {Tweet} from "entities/Tweet";
import defaultAvatar from 'shared/assets/defaultAvatar.png'
import {MoreOutlined} from "@ant-design/icons";
import {getUserPageForLook} from "../../../entities/User";
import {useDispatch} from "react-redux";

export interface TweetCardProps {
    tweet: Tweet
}

export const TweetCard: React.FC<TweetCardProps> = (props) => {
    const {tweet} = props
    const dispatch = useDispatch()
    const userAvatar = tweet.user.avatar ? `http://localhost:5000/${tweet.user.avatar}` : defaultAvatar

    const loadUserInfoForLook = () => {
        // @ts-ignore
        dispatch(getUserPageForLook(tweet.user._id))
    }

    return (
        <div className={cls.tweetCard}>
            <AppLink
                className={cls.avatarLink}
                to={`/${tweet.user.user_name}`}
                onClick={loadUserInfoForLook}
                // to={AppRoutes.PROFILE}
            >
                <img className={cls.avatar} src={userAvatar} alt="avatar"/>
            </AppLink>
            <div className={cls.mediaContent}>
                <div className={cls.content}>
                    <ul className={cls.tweetSubs}>
                        <li>{tweet.user.full_name}</li>
                        <li style={{color: "#6e767d"}}>@{tweet.user.user_name}</li>
                        <li>{tweet.date}</li>
                        <li>
                            <MoreOutlined className={cls.points} />
                        </li>
                    </ul>
                    <div className={cls.tweetText}>
                        {tweet.text}
                    </div>
                </div>
                <ul className={cls.icons}>
                    <li className={cls.reply}>
                        <ReplyIcon className={cls.icon} />
                        {tweet.replies.length === 0 ? '' : tweet.replies.length}
                    </li>
                    <li className={cls.retweet}>
                        <RetweetIcon />
                        {tweet.retweets.length === 0 ? '' : tweet.retweets.length}
                    </li>
                    <li className={cls.like}>
                        <LikeIcon />
                        {tweet.likes.length === 0 ? '' : tweet.likes.length}
                    </li>
                </ul>
            </div>
        </div>
    );
};

