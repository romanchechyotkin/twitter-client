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
import {AppLink} from "shared/ui/AppLink";
import {AppRoutes} from "shared/config/routeConfig/routeConfig";
import {Button} from "antd";

export const LeftSidebar = () => {
    return (
        <div className={cls.sidebar}>
            <AppLink
                to={AppRoutes.HOME}
            >
                <TwitterOutlined className={cls.icon} />
            </AppLink>
            <AppLink
                to={AppRoutes.HOME}
                className={cls.sidebarItem}
            >
                <HomeIcon className={cls.icon} />
                home
            </AppLink>
            <AppLink
                to={AppRoutes.EXPLORE}
                className={cls.sidebarItem}
            >
                <ExploreIcon />
                explore
            </AppLink>
            <AppLink
                to={AppRoutes.NOTIFICATIONS}
                className={cls.sidebarItem}
            >
                <NotificationIcon />
                notifications
            </AppLink>
            <AppLink
                to={AppRoutes.MESSAGES}
                className={cls.sidebarItem}
            >
                <MailOutlined className={cls.icon}/>
                messages
            </AppLink>
            <AppLink
                to={AppRoutes.BOOKMARKS}
                className={cls.sidebarItem}
            >
                <BookMarkIcon />
                bookmarks
            </AppLink>
            <AppLink
                to={AppRoutes.LISTS}
                className={cls.sidebarItem}
            >
                <ListsIcon />
                lists
            </AppLink>
            <AppLink
                to={AppRoutes.PROFILE}
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
            <div className={cls.profile}>
                profile
            </div>
        </div>
    );
};

