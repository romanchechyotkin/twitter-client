import React from 'react';
import cls from './LeftSidebar.module.scss'
import {HomeIcon} from 'shared/assets/icons/HomeIcon';
import {ExploreIcon} from 'shared/assets/icons/ExploreIcon';
import {NotificationIcon} from 'shared/assets/icons/NotificationIcon';
import {BookMarkIcon} from 'shared/assets/icons/BookMarkIcon';
import {ListsIcon} from 'shared/assets/icons/ListsIcon';
import {MoreIcon} from 'shared/assets/icons/MoreIcon';
import {ProfileIcon} from 'shared/assets/icons/ProfileIcon';
import {MailOutlined, TwitterOutlined} from "@ant-design/icons";
import {AppLink} from "shared/ui/AppLink/AppLink";
import {AuthAppRoutes} from "shared/config/routeConfig/routeConfig";
import {Button} from "antd";
import {ProfileWindow} from "../../ProfileWindow";
import {useDispatch, useSelector} from "react-redux";
import {getUserCurrentData, getUserIsAuth, getUserPageForLook} from "entities/User";
import {createTweetModalActions} from "features/CreateTweetModal";

export const LeftSidebar = () => {
    const isAuth = useSelector(getUserIsAuth)
    const user = useSelector(getUserCurrentData)
    const dispatch = useDispatch()

    const openCreateTweetModal = () => {
        dispatch(createTweetModalActions.openCreateTweetModal())
        document.body.style.overflow = "hidden"
    }

    const loadUserInfoForLook = () => {
        // @ts-ignore
        dispatch(getUserPageForLook(user._id))
    }

    return (
        !isAuth
            ?
        <div className={cls.sidebar}>
            <AppLink
                to={AuthAppRoutes.HOME}
                className={cls.sidebarItem}
            >
                <TwitterOutlined className={cls.icon} />
            </AppLink>
            <AppLink
                to={'/explore'}
                className={cls.sidebarItem}
            >
                <ExploreIcon />
                explore
            </AppLink>
        </div>
            :
        <div className={cls.sidebar}>
            <AppLink
                to={AuthAppRoutes.HOME}
                className={cls.sidebarItem}
            >
                <TwitterOutlined className={cls.icon} />
            </AppLink>
            <AppLink
                to={AuthAppRoutes.HOME}
                className={cls.sidebarItem}
            >
                <HomeIcon className={cls.icon} />
                home
            </AppLink>
            <AppLink
                to={AuthAppRoutes.EXPLORE}
                className={cls.sidebarItem}
            >
                <ExploreIcon />
                explore
            </AppLink>
            <AppLink
                to={AuthAppRoutes.NOTIFICATIONS}
                className={cls.sidebarItem}
            >
                <NotificationIcon />
                notifications
            </AppLink>
            <AppLink
                to={'/messages'}
                className={cls.sidebarItem}
            >
                <MailOutlined className={cls.icon}/>
                messages
            </AppLink>
            <AppLink
                to={AuthAppRoutes.BOOKMARKS}
                className={cls.sidebarItem}
            >
                <BookMarkIcon />
                bookmarks
            </AppLink>
            <AppLink
                to={AuthAppRoutes.LISTS}
                className={cls.sidebarItem}
            >
                <ListsIcon />
                lists
            </AppLink>
            <AppLink
                to={user.user_name}
                className={cls.sidebarItem}
                onClick={loadUserInfoForLook}
            >
                <ProfileIcon />
                profile
            </AppLink>
            <div className={cls.sidebarItem}>
                <MoreIcon />
                more
            </div>
            <Button
                className={cls.tweetBtn}
                type="primary"
                size={"large"}
                onClick={openCreateTweetModal}
            >
                Tweet
            </Button>
            {isAuth && <ProfileWindow/>}
        </div>
    );
};

