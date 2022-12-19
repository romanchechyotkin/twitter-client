import React from 'react';
import cls from './ProfileWindow.module.scss'
import {MoreOutlined} from "@ant-design/icons";
import defaultAvatar from 'shared/assets/defaultAvatar.png'
import {useSelector} from "react-redux";
import {getUserData} from "entities/User";


export const ProfileWindow = () => {
    const user = useSelector(getUserData)

    return (
        <div className={cls.profileWindow}>
            <img src={defaultAvatar} alt="icon" className={cls.avatar}/>
            <div>
                <p className={cls.fullName}>{user.full_name}</p>
                <p className={cls.userName}>@{user.user_name}</p>
            </div>
            <MoreOutlined className={cls.points} />
        </div>
    );
};
