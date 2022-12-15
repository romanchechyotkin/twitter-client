import React from 'react';
import cls from './ProfileWindow.module.scss'
import {MoreOutlined} from "@ant-design/icons";
import defaultAvatar from 'shared/assets/defaultAvatar.png'


export const ProfileWindow = () => {

    const user = {
        fullName: 'Раман Чачоткін',
        userName: "raman_chachotka",
    }

    return (
        <div className={cls.profileWindow}>
            <img src={defaultAvatar} alt="icon" className={cls.avatar}/>
            <div>
                <p className={cls.fullName}>{user.fullName}</p>
                <p className={cls.userName}>@{user.userName}</p>
            </div>
            <MoreOutlined className={cls.points} />
        </div>
    );
};
