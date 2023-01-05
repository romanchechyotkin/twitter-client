import React, {useEffect} from 'react';
import cls from './UserColumn.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {getAllUsers, getUserAllUsers, getUserCurrentData, User, userActions} from "entities/User";
import defaultAvatar from 'shared/assets/defaultAvatar.png'

export const UsersColumn = () => {
    const currentUser = useSelector(getUserCurrentData)
    const users = useSelector(getUserAllUsers)
    const dispatch = useDispatch()

    useEffect(() => {
        // @ts-ignore
        dispatch(getAllUsers(currentUser._id))
    }, [currentUser._id, dispatch]);

    const setChat = (user: User) => {
        dispatch(userActions.setUserForLook(user))
    }

    return (
        <div className={cls.usersColumn}>
            {users.map((user) => (
                <div key={user._id} onClick={() => setChat(user)} className={cls.user}>
                    <div>
                        <img
                            className={cls.avatar}
                            src={user.avatar ? `http://localhost:5000/${user.avatar}` : defaultAvatar}
                            alt="avatar"
                        />
                    </div>
                    {user.full_name}
                </div>
            ))}
        </div>
    );
};

