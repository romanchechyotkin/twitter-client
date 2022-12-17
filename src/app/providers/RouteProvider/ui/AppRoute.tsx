import React, {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {routeAuthConfig, routeNotAuthConfig} from "shared/config/routeConfig/routeConfig";
import {useSelector} from "react-redux";
import {getUserIsAuth} from "entities/User";

export const AppRoute = () => {
    const isAuth = useSelector(getUserIsAuth)

    return (
        <Routes>
            {Object.values(isAuth ? routeAuthConfig : routeNotAuthConfig).map(({element, path}) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <Suspense fallback={<h1>loading...</h1>}>
                            <div>{element}</div>
                        </Suspense>
                    )}
                />
            ))}
        </Routes>
    );
};
