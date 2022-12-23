import { Button } from 'antd';
import React from 'react';
import cls from './Profile.module.scss'
import {User} from "entities/User";
import defaultAvatar from "shared/assets/defaultAvatar.png";

export interface ProfileProps {
    user: User
}

export const Profile: React.FC<ProfileProps> = ({user}) => {

    const userAvatar = user.avatar ? `http://localhost:5000/${user.avatar}` : defaultAvatar

    return (
        <div>
            <div className={cls.background} />
            <div className={cls.media}>
                <img className={cls.avatar} src={userAvatar} alt="avatar" />
                <Button
                    type={'text'}
                    style={{color: "white", border: "1px solid white"}}
                >
                    change profile
                </Button>
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
