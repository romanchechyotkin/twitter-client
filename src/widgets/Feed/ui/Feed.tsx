import React, {useEffect} from 'react';
import {TweetCard} from "widgets/TweetCard";
import Avatar from "shared/assets/avatar.jpg";

export const Feed = () => {

    useEffect(() => {
        console.log('loaded')
    }, []);

    const tweets = [
        {
            avatar: Avatar,
            fullName: "user1",
            userName: 'user1',
            time: "3s",
            text: 'lorem11qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',
            replies: 0,
            retweets: 0,
            likes: 0
        },
        {
            avatar: Avatar,
            fullName: "user2",
            userName: 'user2',
            time: "15min",
            text: 'awwjafoiawoifnoai wfpawfnawoigfnoiwagn oagfbawfibawibfiblf hfshlagbgawwjafoiaw oifnoaiwfpawfnawoigfnoiwagnoagfbawfibawibfiblfbhfshlagbg',
            replies: 3,
            retweets: 1,
            likes: 110
        },
        {
            avatar: Avatar,
            fullName: "user1",
            userName: 'user1',
            time: "3s",
            text: 'lorem11qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',
            replies: 0,
            retweets: 0,
            likes: 0
        },
        {
            avatar: Avatar,
            fullName: "user2",
            userName: 'user2',
            time: "15min",
            text: 'awwjafoiawoifnoai wfpawfnawoigfnoiwagn oagfbawfibawibfiblf hfshlagbgawwjafoiaw oifnoaiwfpawfnawoigfnoiwagnoagfbawfibawibfiblfbhfshlagbg',
            replies: 3,
            retweets: 1,
            likes: 110
        },
        {
            avatar: Avatar,
            fullName: "user1",
            userName: 'user1',
            time: "3s",
            text: 'lorem11qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',
            replies: 0,
            retweets: 0,
            likes: 0
        },
        {
            avatar: Avatar,
            fullName: "user2",
            userName: 'user2',
            time: "15min",
            text: 'awwjafoiawoifnoai wfpawfnawoigfnoiwagn oagfbawfibawibfiblf hfshlagbgawwjafoiaw oifnoaiwfpawfnawoigfnoiwagnoagfbawfibawibfiblfbhfshlagbg',
            replies: 3,
            retweets: 1,
            likes: 110
        },
        {
            avatar: Avatar,
            fullName: "user1",
            userName: 'user1',
            time: "3s",
            text: 'lorem11qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',
            replies: 0,
            retweets: 0,
            likes: 0
        },
        {
            avatar: Avatar,
            fullName: "user2",
            userName: 'user2',
            time: "15min",
            text: 'awwjafoiawoifnoai wfpawfnawoigfnoiwagn oagfbawfibawibfiblf hfshlagbgawwjafoiaw oifnoaiwfpawfnawoigfnoiwagnoagfbawfibawibfiblfbhfshlagbg',
            replies: 3,
            retweets: 1,
            likes: 110
        },
    ]

    return (
        <div>
            {tweets.map(tweet =>
                <TweetCard tweet={tweet} key={tweet.likes} />
            )}
        </div>
    );
};

