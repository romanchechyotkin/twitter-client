import {Navigate, RouteProps} from "react-router-dom";
import {ProfilePage} from "pages/ProfilePage";
import {HomePage} from "pages/HomePage";
import {ExplorePage} from "pages/ExplorePage";
import {NotificationsPage} from "pages/NotificationsPage";
import {MessagesPage} from "pages/MessagesPage";
import {BookmarksPage} from "pages/BookmarksPage";
import {ListsPage} from "pages/ListsPage";

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
        element: <HomePage />,
    },
    [AppRoutes.EXPLORE]: {
        path: RoutePath.explore,
        element: <ExplorePage />,
    },
    [AppRoutes.NOTIFICATIONS]: {
        path: RoutePath.notifications,
        element: <NotificationsPage />,
    },
    [AppRoutes.MESSAGES]: {
        path: RoutePath.messages,
        element: <MessagesPage />,
    },
    [AppRoutes.BOOKMARKS]: {
        path: RoutePath.bookmarks,
        element: <BookmarksPage />,
    },
    [AppRoutes.LISTS]: {
        path: RoutePath.lists,
        element: <ListsPage />,
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage />,
    },
    [AppRoutes.ERROR]: {
        path: RoutePath.error,
        element: <h1>error</h1>,
    }
};
