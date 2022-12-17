import React from 'react';
import cls from './LoginFooter.module.scss'
import {Button} from "antd";

export const LoginFooter = () => {
    return (
        <div className={cls.footer}>
            <div className={cls.text}>
                <p>Don’t miss what’s happening</p>
                <p>People on Twitter are the first to know.</p>
            </div>
            <div className={cls.buttons}>
                <Button>Login In</Button>
                <Button>Sign Up</Button>
            </div>
        </div>
    );
};
