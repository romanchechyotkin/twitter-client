import { Button } from 'antd';
import React from 'react';
import cls from './Profile.module.scss'
import {followUser, getUserCurrentData, getUserDataForLook, User} from "entities/User";
import defaultAvatar from "shared/assets/defaultAvatar.png";
import {useDispatch, useSelector} from "react-redux";

export interface ProfileProps {
    user: User
}

export const Profile: React.FC<ProfileProps> = ({user}) => {
    const currentUser = useSelector(getUserCurrentData)
    const userAvatar = user.avatar ? `http://localhost:5000/${user.avatar}` : defaultAvatar
    const userForLook = useSelector(getUserDataForLook)
    const dispatch = useDispatch()

    const follow = () => {
        // @ts-ignore
        dispatch(followUser(userForLook._id))
    }

    const checkFollow = () => {
        // @ts-ignore
        return currentUser.follows.includes(userForLook._id) ? "Unfollow" : "Follow"
    }

    // @ts-ignore
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
                    <Button onClick={follow}>
                        {checkFollow()}
                    </Button>
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
