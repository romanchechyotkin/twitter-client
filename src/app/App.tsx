import React, {useEffect} from 'react';
import {LeftSidebar} from "widgets/LeftSidebar";
import {RightSidebar} from "widgets/RightSidebar";
import {AppRoute} from "./providers/RouteProvider";
import {useDispatch, useSelector} from "react-redux";
import {getUserIsAuth, userActions} from "../entities/User";
import {LoginFooter} from "../widgets/LoginFooter";
import {getLoginUserIsVisible, LoginUser} from "../features/LoginUser";

export const App = () => {
    const isAuth = useSelector(getUserIsAuth)
    const isVisible = useSelector(getLoginUserIsVisible)
    const dispatch = useDispatch()

    useEffect(() => {
        const accessToken = JSON.parse(localStorage.getItem('accessToken') as string)
        const user = JSON.parse(localStorage.getItem('user') as string)
        if (!user || !accessToken) {
            dispatch(userActions.logoutUser())
        } else {
            const user = JSON.parse(localStorage.getItem('user') as string)
            dispatch(userActions.setUser(user))
            dispatch(userActions.initUser())
        }
    }, [dispatch]);

    return (
        <>
            <div className={'app'}>
                <LeftSidebar />
                <div className={'timeline'} style={{width: '600px'}}>
                    <AppRoute />
                </div>
                <RightSidebar />
            </div>
            {isVisible && <LoginUser />}
            {!isAuth && <LoginFooter />}
        </>
      );
};
