import React from 'react';
import {Button} from "antd";
import cls from './RegistrationUser.module.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {useDispatch, useSelector} from "react-redux";
import {getRegistrationUserEmail} from "../model/selectors/getRegistrationUserEmail/getRegistrationUserEmail";
import {getRegistrationUserPassword} from "../model/selectors/getRegistrationUserPassword/getRegistrationUserPassword";
import {getRegistrationUserCurrentStep} from "../model/selectors/getRegistrationUserCurrentStep/getRegistrationUserCurrentStep";
import {getRegistrationUserIsVisible} from "../model/selectors/getRegistrationUserIsVisible/getRegistrationUserIsVisible";
import {CloseOutlined, LeftOutlined} from "@ant-design/icons";
import {registrationUserActions} from "../model/slice/registrationUserSlice";
import {getRegistrationUserUserName} from "../model/selectors/getRegistrationUserUserName/getRegistrationUserUserName";
import {getRegistrationUserFullName} from "../model/selectors/getRegistrationUserFullName/getRegistrationUserFullName";
import {checkRegistrationUserEmail} from '../model/services/checkRegistrationUserEmail/checkRegistrationUserEmail'
import {registrationByEmail} from '../model/services/registrationByEmail/registrationByEmail'
import {
    getRegistrationUserIsLoading
} from "../model/selectors/getRegistrationUserIsLoading/getRegistrationUserIsLoading";
import { Loader } from 'shared/ui/Loader/Loader';

const steps = [
    {
        title: 'Create your account',
        placeholderOne: 'Name',
        placeholderTwo: 'Email',
    },
    {
        title: 'Enter your password',
        placeholder: 'password',
    },
    {
        title: 'Enter your user name',
        placeholder: '@username',
    }
];

export const RegistrationUser = () => {
    const email = useSelector(getRegistrationUserEmail)
    const password = useSelector(getRegistrationUserPassword)
    const userName = useSelector(getRegistrationUserUserName)
    const fullName = useSelector(getRegistrationUserFullName)
    const currentStep = useSelector(getRegistrationUserCurrentStep)
    const isVisible = useSelector(getRegistrationUserIsVisible)
    const isLoading = useSelector(getRegistrationUserIsLoading)
    const dispatch = useDispatch()

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const closeRegistrationUserWindow = () => {
        dispatch(registrationUserActions.closeRegistrationUser())
        dispatch(registrationUserActions.setPassword(''))
        dispatch(registrationUserActions.setFullName(''))
        dispatch(registrationUserActions.setEmail(''))
        dispatch(registrationUserActions.setUserName(''))
        dispatch(registrationUserActions.resetCurrentStep())
    }

    const nextStep = () => {
        dispatch(registrationUserActions.incCurrentStep())
    }

    const backStep = () => {
        dispatch(registrationUserActions.decCurrentStep())
    }

    const onChangeEmail = (e: { target: { value: any; }; }) => {
        dispatch(registrationUserActions.setEmail(e.target.value))
    }

    const onChangePassword = (e: { target: { value: any; }; }) => {
        dispatch(registrationUserActions.setPassword(e.target.value))
    }

    const onChangeUserName = (e: { target: { value: any; }; }) => {
        dispatch(registrationUserActions.setUserName(e.target.value))
    }

    const onChangeFullName = (e: { target: { value: any; }; }) => {
        dispatch(registrationUserActions.setFullName(e.target.value))
    }

    const checkEmail = () => {
        // @ts-ignore
        dispatch(checkRegistrationUserEmail(email))
    }

    const registration = () => {
        // @ts-ignore
        dispatch(registrationByEmail({email: email, password: password, userName: userName, fullName: fullName}));
    }

    return (
        <div className={classNames(cls.loginUserWindow, {[cls.opened]: isVisible}, [])}>
            <div className={cls.overlay}>
                <div onClick={onContentClick} className={cls.content}>
                    <div className={cls.icons}>
                        {currentStep === 0 ?
                            <CloseOutlined onClick={closeRegistrationUserWindow} className={cls.close}/>
                            :
                            <LeftOutlined onClick={backStep} className={cls.close} />
                        }
                    </div>
                    <div className={cls.title}>{steps[currentStep].title}</div>
                    <div className={cls.media}>
                        {currentStep !== 2 && <input
                            className={cls.input}
                            placeholder={steps[currentStep].placeholderOne}
                            type={steps[currentStep].placeholder === 'password' ? 'password' : 'text'}
                            value={steps[currentStep].placeholder === 'password' ? password : fullName}
                            onChange={steps[currentStep].placeholder === 'password' ? onChangePassword : onChangeFullName}
                        />}
                        {currentStep === 0 && <input
                            className={cls.input}
                            placeholder={steps[currentStep].placeholderTwo}
                            type={"text"}
                            value={email}
                            onChange={onChangeEmail}
                        />}
                        {currentStep === 2 && <input
                            className={cls.input}
                            placeholder={steps[currentStep].placeholder}
                            type={"text"}
                            value={userName}
                            onChange={onChangeUserName}
                        />}
                        <div className="steps-action">
                            {currentStep < steps.length - 1 && (
                                <Button
                                    className={cls.btn}
                                    onClick={currentStep === 0 ? checkEmail : nextStep}
                                    disabled={!email || !fullName}
                                    style={{backgroundColor: 'white'}}
                                >
                                    Next
                                </Button>
                            )}
                            {currentStep === steps.length - 1 && (
                                <Button
                                    className={cls.btn}
                                    onClick={registration}
                                >
                                    {isLoading ? <Loader /> : 'Registration'}
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

