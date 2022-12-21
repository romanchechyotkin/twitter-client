import React, {useState} from 'react';
import cls from './ProfileWindow.module.scss'
import {MoreOutlined} from "@ant-design/icons";
import defaultAvatar from 'shared/assets/defaultAvatar.png'
import {useDispatch, useSelector} from "react-redux";
import {getUserData, logoutUser} from "entities/User";


export const ProfileWindow = () => {
    const [logoutVisible, setLogoutVisible] = useState(false);
    const user = useSelector(getUserData)
    const dispatch = useDispatch()

    const userAvatar = user.avatar ? `http://localhost:5000/${user.avatar}` : defaultAvatar

    const showLogout = () => {
        setLogoutVisible(!logoutVisible)
    }

    const logout = () => {
        // @ts-ignore
        dispatch(logoutUser())
    }

    return (
        <div className={cls.window}>
            {logoutVisible && <div>
                <button onClick={logout}>logout</button>
            </div>}
            <div onClick={showLogout} className={cls.profileWindow}>
                <img src={userAvatar} alt="icon" className={cls.avatar}/>
                <div>
                    <p className={cls.fullName}>{user.full_name}</p>
                    <p className={cls.userName}>@{user.user_name}</p>
                </div>
                <MoreOutlined className={cls.points} />
            </div>
        </div>
    );
};
