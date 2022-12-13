import React from 'react';
import {Link, LinkProps} from "react-router-dom";
import cls from './AppLink.module.scss'
import {classNames} from "../../lib/classNames/classNames";

export interface AppLinkProps extends LinkProps {
    className?: string;
}

export const AppLink: React.FC<AppLinkProps> = (props) => {
    const {
        children,
        className,
        to,
        ...otherProps
    } = props

    return (
        <Link
            // @ts-ignore
            className={classNames(cls.appLink, {}, [className])}
            to={to}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
