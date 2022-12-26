import React from 'react';
import {Button} from "antd";
import cls from './LoginUser.module.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {useDispatch, useSelector} from "react-redux";
import {getLoginUserIsVisible} from "../model/selectors/getLoginUserIsVisible/getLoginUserIsVisible";
import {CloseOutlined, TwitterOutlined} from "@ant-design/icons";
import {loginUserActions} from "../model/slice/loginUserSlice";
import {getLoginUserPassword} from "../model/selectors/getLoginUserPassword/getLoginUserPassword";
import {getLoginUserEmail} from "../model/selectors/getLoginUserEmail/getLoginUserEmail";
import {checkLoginUserEmail} from "../model/services/checkUserEmail/checkUserEmail";
import {getLoginUserCurrentStep} from "../model/selectors/getLoginUserCurrentStep/getLoginUserCurrentStep";
import {loginByEmail} from "../model/services/loginByEmail/loginByEmail";

const steps = [
    {
        title: 'Sign In to Twitter',
        placeholder: 'email',
    },
    {
        title: 'Enter your password',
        placeholder: 'password',
    }
];

export const LoginUser = () => {
    const currentStep = useSelector(getLoginUserCurrentStep)
    const isVisible = useSelector(getLoginUserIsVisible)
    const email = useSelector(getLoginUserEmail)
    const password = useSelector(getLoginUserPassword)
    const dispatch = useDispatch()

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const closeLoginUserWindow = () => {
        dispatch(loginUserActions.closeLoginUser())
        dispatch(loginUserActions.setEmail(''))
        dispatch(loginUserActions.setPassword(''))
        dispatch(loginUserActions.resetCurrentStep())
    }

    const onChangeEmail = (e: { target: { value: any; }; }) => {
        dispatch(loginUserActions.setEmail(e.target.value))
    }

    const onChangePassword = (e: { target: { value: any; }; }) => {
        dispatch(loginUserActions.setPassword(e.target.value))
    }

    const checkEmail = () => {
        // @ts-ignore
        dispatch(checkLoginUserEmail(email))
    }

    const login = () => {
        // @ts-ignore
        dispatch(loginByEmail({email: email, password: password}));
    }

    return (
        <div className={classNames(cls.loginUserWindow, {[cls.opened]: isVisible}, [])}>
            <div className={cls.overlay}>
                <div onClick={onContentClick} className={cls.content}>
                    <div className={cls.icons}>
                        <CloseOutlined onClick={closeLoginUserWindow} className={cls.close} />
                        <TwitterOutlined className={cls.icon} />
                    </div>
                    <div className={cls.title}>{steps[currentStep].title}</div>
                    <div className={cls.media}>
                        <Button className={cls.btn}>google</Button>
                        <Button className={cls.btn}>apple</Button>
                        <div>or</div>
                        <input
                            className={cls.input}
                            placeholder={steps[currentStep].placeholder}
                            type={steps[currentStep].placeholder === 'email' ? "text" : 'password'}
                            value={steps[currentStep].placeholder === 'email' ? email : password}
                            onChange={steps[currentStep].placeholder === 'email' ? onChangeEmail : onChangePassword}
                        />
                        <div className="steps-action">
                            {currentStep < steps.length - 1 && (
                                <Button
                                    className={cls.btn}
                                    onClick={checkEmail}
                                >
                                    Next
                                </Button>
                            )}
                            {currentStep === steps.length - 1 && (
                                <Button
                                    className={cls.btn}
                                    onClick={login}
                                >
                                    Login
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

