import React, {useEffect} from 'react';
import {LeftSidebar} from "widgets/LeftSidebar";
import {RightSidebar} from "widgets/RightSidebar";
import {AppRoute} from "./providers/RouteProvider";
import {useDispatch, useSelector} from "react-redux";
import {getUserIsAuth, userActions} from "entities/User";
import {LoginFooter} from "widgets/LoginFooter";
import {getLoginUserIsVisible, LoginUser} from "features/LoginUser";
import {CreateTweetModal, getCreateTweetModalIsVisible} from "features/CreateTweetModal";
import {getRegistrationUserIsVisible} from "features/RegistrationUser";
import {RegistrationUser} from "features/RegistrationUser";
import {useLocation} from "react-router-dom";

export const App = () => {
    const isAuth = useSelector(getUserIsAuth)
    const loginUserIsVisible = useSelector(getLoginUserIsVisible)
    const registrationUserIsVisible = useSelector(getRegistrationUserIsVisible)
    const createTweetModalIsVisible = useSelector(getCreateTweetModalIsVisible)
    const location = useLocation()
    const dispatch = useDispatch()

    useEffect(() => {
        const accessToken = JSON.parse(localStorage.getItem('accessToken') as string)
        const user = JSON.parse(localStorage.getItem('user') as string)
        if (!user || !accessToken) {
            dispatch(userActions.logoutCurrentUser())
        } else {
            const user = JSON.parse(localStorage.getItem('user') as string)
            dispatch(userActions.setCurrentUser(user))
            dispatch(userActions.initCurrentUser())
        }
    }, [dispatch]);

    return (
        <>
            <div className={'app'}>
                <LeftSidebar />
                <div className={'timeline'}>
                    <AppRoute/>
                </div>
                {location.pathname !== '/messages' && <RightSidebar/>}
            </div>
            {createTweetModalIsVisible && <CreateTweetModal />}
            {loginUserIsVisible && <LoginUser />}
            {registrationUserIsVisible && <RegistrationUser />}
            {!isAuth && <LoginFooter />}
        </>
    );
};
