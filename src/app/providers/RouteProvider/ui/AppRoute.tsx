import React, {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig/routeConfig";
// import {PageLoader} from "widgets/PageLoader";

export const AppRoute = () => {
    return (
        <Routes>
            {Object.values(routeConfig).map(({element, path}) => (
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
