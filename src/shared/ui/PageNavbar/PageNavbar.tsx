import React from 'react';
import cls from './PageNavbar.module.scss'
import {TopTweetsIcon} from "../../assets/icons/TopTweetsIcon";

export enum PageNavbarIconEnum {
    HOME='home'
}

export interface PageNavbarProps {
    className?: string;
    navbarTitle: string;
    icon?: PageNavbarIconEnum;
}

export const PageNavbar: React.FC<PageNavbarProps> = (props) => {
    const {
        navbarTitle,
        icon
    } = props

    return (
        <div className={cls.navbar}>
            {navbarTitle}
            {icon === 'home' && <div className={cls.navbarIcon}><TopTweetsIcon /></div>}
        </div>
    );
};

