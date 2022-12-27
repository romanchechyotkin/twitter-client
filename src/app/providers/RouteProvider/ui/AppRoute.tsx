import React, {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {routeAuthConfig, routeNotAuthConfig} from "shared/config/routeConfig/routeConfig";
import {useSelector} from "react-redux";
import {getUserIsAuth} from "entities/User";
import {Loader} from "shared/ui/Loader/Loader";

export const AppRoute = () => {
    const isAuth = useSelector(getUserIsAuth)

    return (
        <Routes>
            {Object.values(isAuth ? routeAuthConfig : routeNotAuthConfig).map(({element, path}) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <Suspense fallback={<Loader />}>
                            <div>{element}</div>
                        </Suspense>
                    )}
                />
            ))}
        </Routes>
    );
};
