import React from 'react';
import {PageNavbar, PageNavbarIconEnum} from "shared/ui/PageNavbar/PageNavbar";
import {CreateTweetForm} from "features/CreateTweet";

const HomePage = () => {
    return (
        <div>
            <PageNavbar navbarTitle={'Home'} icon={PageNavbarIconEnum.HOME}/>
            <CreateTweetForm />
        </div>
    );
};

export default HomePage;
