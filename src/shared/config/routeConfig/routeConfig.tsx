import {Navigate, RouteProps} from "react-router-dom";

export enum AppRoutes {
    MAIN="main",
    HOME='home',
    EXPLORE='explore',
    NOTIFICATIONS='notifications',
    MESSAGES='messages',
    BOOKMARKS='bookmarks',
    LISTS='lists',
    PROFILE='profile',
    ERROR='error'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.HOME]: "/home",
    [AppRoutes.EXPLORE]: "/explore",
    [AppRoutes.NOTIFICATIONS]: "/notifications",
    [AppRoutes.MESSAGES]: "/messages",
    [AppRoutes.BOOKMARKS]: "/bookmarks",
    [AppRoutes.LISTS]: "/lists",
    [AppRoutes.PROFILE]: "/profile",
    [AppRoutes.ERROR]: "*"
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <Navigate to={'/home'} />,
    },
    [AppRoutes.HOME]: {
        path: RoutePath.home,
        element: <h1>home</h1>,
    },
    [AppRoutes.EXPLORE]: {
        path: RoutePath.explore,
        element: <h1>explore</h1>,
    },
    [AppRoutes.NOTIFICATIONS]: {
        path: RoutePath.notifications,
        element: <h1>notifications</h1>,
    },
    [AppRoutes.MESSAGES]: {
        path: RoutePath.messages,
        element: <h1>messages</h1>,
    },
    [AppRoutes.BOOKMARKS]: {
        path: RoutePath.bookmarks,
        element: <h1>bookmarks</h1>,
    },
    [AppRoutes.LISTS]: {
        path: RoutePath.lists,
        element: <h1>lists</h1>,
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <h1>profile</h1>,
    },
    [AppRoutes.ERROR]: {
        path: RoutePath.error,
        element: <h1>error</h1>,
    }
};
