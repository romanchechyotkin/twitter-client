import React from 'react';
import cls from './ProfileWindow.module.scss'
import Avatar from 'shared/assets/avatar.jpg'
import {MoreOutlined} from "@ant-design/icons";

export const ProfileWindow = () => {

    const user = {
        fullName: 'Раман Чачоткін',
        userName: "raman_chachotka",
    }

    return (
        <div className={cls.profileWindow}>
            <img src={Avatar} alt="icon" className={cls.avatar}/>
            <div>
                <p className={cls.fullName}>{user.fullName}</p>
                <p className={cls.userName}>@{user.userName}</p>
            </div>
            <MoreOutlined className={cls.points} />
        </div>
    );
};
