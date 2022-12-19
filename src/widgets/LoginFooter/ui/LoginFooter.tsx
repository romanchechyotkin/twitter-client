import React from 'react';
import cls from './LoginFooter.module.scss'
import {Button} from "antd";
import {useDispatch} from "react-redux";
import {loginUserActions} from "features/LoginUser";

export const LoginFooter = () => {
    const dispatch = useDispatch()

    const openLoginUserWindow = () => {
        dispatch(loginUserActions.openLoginUser())
        document.body.style.overflow = "hidden"
    }

    return (
        <div className={cls.footer}>
            <div className={cls.text}>
                <p>Don’t miss what’s happening</p>
                <p>People on Twitter are the first to know</p>
            </div>
            <div className={cls.buttons}>
                <Button onClick={openLoginUserWindow}>Login In</Button>
                <Button>Sign Up</Button>
            </div>
        </div>
    );
};
