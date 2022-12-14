import React from 'react';
import cls from './TweetCard.module.scss'
import {AppLink} from "shared/ui/AppLink/AppLink";
import {LikeIcon} from "shared/assets/icons/LikeIcon";
import {ReplyIcon} from "shared/assets/icons/ReplyIcon";
import {RetweetIcon} from "shared/assets/icons/RetweetIcon";



export interface TweetCardProps {
    tweet: {
        avatar: string,
        fullName: string,
        userName: string,
        time: string
        text: string,
        replies: number,
        retweets: number,
        likes: number
    }
}

export const TweetCard: React.FC<TweetCardProps> = (props) => {
    const {tweet} = props

    return (
        <div className={cls.tweetCard}>
            <AppLink
                className={cls.avatarLink}
                to={'/profile'}
                // to={AppRoutes.PROFILE}
            >
                <img className={cls.avatar} src={tweet.avatar} alt="avatar"/>
            </AppLink>
            <div className={cls.mediaContent}>
                <div className={cls.content}>
                    <ul className={cls.tweetSubs}>
                        <li>{tweet.fullName}</li>
                        <li>{tweet.userName}</li>
                        <li>{tweet.time}</li>
                    </ul>
                    <div className={cls.tweetText}>
                        {tweet.text}
                    </div>
                </div>
                <ul className={cls.icons}>
                    <li className={cls.reply}><ReplyIcon className={cls.icon} />{tweet.replies}</li>
                    <li className={cls.retweet}><RetweetIcon />{tweet.retweets}</li>
                    <li className={cls.like}><LikeIcon />{tweet.likes}</li>
                </ul>
            </div>
        </div>
    );
};

