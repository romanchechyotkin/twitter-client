import React from 'react';
import {PageNavbar, PageNavbarIconEnum} from "shared/ui/PageNavbar/PageNavbar";
import {CreateTweetForm} from "features/CreateTweet";
import {Feed} from "features/Feed";
import cls from './HomePage.module.scss'

const HomePage = () => {

    return (
        <div className={cls.homePage}>
            <PageNavbar navbarTitle={'Home'} icon={PageNavbarIconEnum.HOME}/>
            <CreateTweetForm />
            <Feed />
        </div>
    );
};

export default HomePage;
