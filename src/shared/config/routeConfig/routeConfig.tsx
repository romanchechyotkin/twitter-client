import {Navigate, RouteProps} from "react-router-dom";
import {ProfilePage} from "pages/ProfilePage";
import {HomePage} from "pages/HomePage";
import {ExplorePage} from "pages/ExplorePage";
import {NotificationsPage} from "pages/NotificationsPage";
import {MessagesPage} from "pages/MessagesPage";
import {BookmarksPage} from "pages/BookmarksPage";
import {ListsPage} from "pages/ListsPage";

export enum AuthAppRoutes {
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

export const AuthRoutePath: Record<AuthAppRoutes, string> = {
    [AuthAppRoutes.MAIN]: "/",
    [AuthAppRoutes.HOME]: "/home",
    [AuthAppRoutes.EXPLORE]: "/explore",
    [AuthAppRoutes.NOTIFICATIONS]: "/notifications",
    [AuthAppRoutes.MESSAGES]: "/messages",
    [AuthAppRoutes.BOOKMARKS]: "/bookmarks",
    [AuthAppRoutes.LISTS]: "/lists",
    [AuthAppRoutes.PROFILE]: "/profile",
    [AuthAppRoutes.ERROR]: "*"
};

export enum NotAuthAppRoutes {
    MAIN="main",
    EXPLORE='explore',
    ERROR='error',
    // NOTIFICATIONS='notifications',
    // MESSAGES='messages',
    // BOOKMARKS='bookmarks',
    // LISTS='lists',
    // PROFILE='profile',
}

export const NotAuthRoutePath: Record<NotAuthAppRoutes, string> = {
    [AuthAppRoutes.MAIN]: "/",
    [AuthAppRoutes.EXPLORE]: "/explore",
    [AuthAppRoutes.ERROR]: "*",
    // [AuthAppRoutes.NOTIFICATIONS]: "/notifications",
    // [AuthAppRoutes.MESSAGES]: "/messages",
    // [AuthAppRoutes.BOOKMARKS]: "/bookmarks",
    // [AuthAppRoutes.LISTS]: "/lists",
    // [AuthAppRoutes.PROFILE]: "/profile",
};



export const routeAuthConfig: Record<AuthAppRoutes, RouteProps> = {
    [AuthAppRoutes.MAIN]: {
        path: AuthRoutePath.main,
        element: <Navigate to={'/home'} />,
    },
    [AuthAppRoutes.HOME]: {
        path: AuthRoutePath.home,
        element: <HomePage />,
    },
    [AuthAppRoutes.EXPLORE]: {
        path: AuthRoutePath.explore,
        element: <ExplorePage />,
    },
    [AuthAppRoutes.NOTIFICATIONS]: {
        path: AuthRoutePath.notifications,
        element: <NotificationsPage />,
    },
    [AuthAppRoutes.MESSAGES]: {
        path: AuthRoutePath.messages,
        element: <MessagesPage />,
    },
    [AuthAppRoutes.BOOKMARKS]: {
        path: AuthRoutePath.bookmarks,
        element: <BookmarksPage />,
    },
    [AuthAppRoutes.LISTS]: {
        path: AuthRoutePath.lists,
        element: <ListsPage />,
    },
    [AuthAppRoutes.PROFILE]: {
        path: AuthRoutePath.profile,
        element: <ProfilePage />,
    },
    [AuthAppRoutes.ERROR]: {
        path: AuthRoutePath.error,
        element: <h1>error</h1>,
    }
};

export const routeNotAuthConfig: Record<NotAuthAppRoutes, RouteProps> = {
    [NotAuthAppRoutes.MAIN]: {
        path: NotAuthRoutePath.main,
        element: <Navigate to={'/explore'} />
    },
    [NotAuthAppRoutes.EXPLORE]: {
        path: NotAuthRoutePath.explore,
        element: <ExplorePage />
    },
    [NotAuthAppRoutes.ERROR]: {
        path: NotAuthRoutePath.error,
        element: <Navigate to={'/explore'} />
    }
};

