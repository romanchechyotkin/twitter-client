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
import {useSelector} from "react-redux";
import {getUserIsAuth} from "entities/User";

export const LeftSidebar = () => {
    const isAuth = useSelector(getUserIsAuth)

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
                to={AuthAppRoutes.MESSAGES}
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
                to={AuthAppRoutes.PROFILE}
                className={cls.sidebarItem}
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
            >
                Tweet
            </Button>
            {isAuth && <ProfileWindow/>}
        </div>
    );
};

