import React from 'react';
import {LeftSidebar} from "widgets/LeftSidebar";
import {RightSidebar} from "widgets/RightSidebar";
import {AppRoute} from "./providers/RouteProvider";
import {useSelector} from "react-redux";
import {getUserIsAuth} from "../entities/User";
import {LoginFooter} from "../widgets/LoginFooter";

export const App = () => {
    const isAuth = useSelector(getUserIsAuth)

    return (
        <>
            <div className={'app'}>
                <LeftSidebar />
                <div className={'timeline'} style={{width: '600px'}}>
                    <AppRoute />
                </div>
                <RightSidebar />
            </div>
            {!isAuth && <LoginFooter />}
        </>
      );
};
