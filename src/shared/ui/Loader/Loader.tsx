import React from 'react';
import cls from './Loader.module.scss'

export const Loader = () => {
    return (
        <div className={cls.ldsRing}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

