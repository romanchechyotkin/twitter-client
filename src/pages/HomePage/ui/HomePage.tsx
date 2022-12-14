import React from 'react';
import {PageNavbar, PageNavbarIconEnum} from "shared/ui/PageNavbar/PageNavbar";
import {CreateTweetForm} from "features/CreateTweet";
import {Feed} from "widgets/Feed";

const HomePage = () => {

    return (
        <div>
            <PageNavbar navbarTitle={'Home'} icon={PageNavbarIconEnum.HOME}/>
            <CreateTweetForm />
            <Feed />
        </div>
    );
};

export default HomePage;
