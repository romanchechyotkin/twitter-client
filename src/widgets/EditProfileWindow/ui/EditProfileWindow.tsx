import React, {useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./EditProfileWindow.module.scss";
import {CloseOutlined} from "@ant-design/icons";
import {Button} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {getUserCurrentData, updateNames, uploadAvatar} from "entities/User";
import DefaultAvatar from 'shared/assets/defaultAvatar.png'

export interface EditProfileWindowProps {
    isVisible: boolean,
    setIsVisible: (value: (((prevState: boolean) => boolean) | boolean)) => void
}

export const EditProfileWindow: React.FC<EditProfileWindowProps> = ({ isVisible, setIsVisible}) => {
    const currentUser = useSelector(getUserCurrentData)
    const [fullName, setFullName] = useState(currentUser.full_name);
    const [userName, setUserName] = useState(currentUser.user_name);
    const dispatch = useDispatch()

    const avatar = currentUser.avatar ? `http://localhost:5000/${currentUser.avatar}` : DefaultAvatar

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const fullNameInputChange = (e: { target: { value: any; }; }) => {
        setFullName(e.target.value)
    }

    const userNameInputChange = (e: { target: { value: any; }; }) => {
        setUserName(e.target.value)
    }

    const close = () => {
        setIsVisible(false)
    }

    const avatarOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        const file = e.target.files[0]
        // @ts-ignore
        dispatch(uploadAvatar(file))
    }

    const save = () => {
        // @ts-ignore
        dispatch(updateNames({userName: userName, fullName: fullName}))
        setIsVisible(false)
    }

    return (
        <div className={classNames(cls.editProfileWindow, {[cls.opened]: isVisible}, [])}>
            <div className={cls.overlay}>
                <div onClick={onContentClick} className={cls.content}>
                    <div className={cls.media}>
                        <CloseOutlined onClick={close} className={cls.close} />
                        <p>Edit Profile</p>
                        <Button onClick={save}>Save</Button>
                    </div>
                    <div>
                        <div title={'add avatar'} className={cls.dropZone} style={{backgroundImage: `url(${avatar})`}}/>
                        <input onChange={e => avatarOnChange(e)} title={'add avatar'} type="file" accept={".jpg,.png"} className={cls.avatar}/>
                    </div>
                    <div>
                        <label>Full Name</label>
                        <input
                            value={fullName}
                            onChange={fullNameInputChange}
                            type="text"
                            className={cls.fullNameInput}
                        />
                    </div>
                    <div>
                        <label>User Name</label>
                        <input
                            value={userName}
                            onChange={userNameInputChange}
                            type="text"
                            className={cls.fullNameInput}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
