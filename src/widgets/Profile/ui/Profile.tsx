import { Button } from 'antd';
import React from 'react';
import cls from './Profile.module.scss'
import {getUserCurrentData, getUserDataForLook, User} from "entities/User";
import defaultAvatar from "shared/assets/defaultAvatar.png";
import {useSelector} from "react-redux";
import {FollowButton} from "widgets/FollowButton";
import {UnfollowButton} from "widgets/UnfollowButton";

export interface ProfileProps {
    user: User
}

export const Profile: React.FC<ProfileProps> = ({user}) => {
    const currentUser = useSelector(getUserCurrentData)
    const userForLook = useSelector(getUserDataForLook)
    const userAvatar = user.avatar ? `http://localhost:5000/${user.avatar}` : defaultAvatar

    const checkFollow = () => {
        // @ts-ignore
        return currentUser.follows.includes(userForLook._id)
    }

    return (
        <div>
            <div className={cls.background} />
            <div className={cls.media}>
                <img className={cls.avatar} src={userAvatar} alt="avatar" />
                {currentUser._id === user._id ? <Button
                    type={'text'}
                    style={{color: "white", border: "1px solid white"}}
                >
                    edit profile
                </Button>
                :
                    <div>
                        {checkFollow() ? <UnfollowButton id={userForLook._id} /> : <FollowButton id={userForLook._id} />}
                    </div>
                }
            </div>
            <div className={cls.userInfo}>
                <div className={cls.fullName}>{user.full_name}</div>
                <div className={cls.userName}>@{user.user_name}</div>
                <div className={cls.followings}>
                    <div>{user.follows.length} followings</div>
                    <div>{user.followers.length} followers</div>
                </div>
            </div>
        </div>
    );
};
