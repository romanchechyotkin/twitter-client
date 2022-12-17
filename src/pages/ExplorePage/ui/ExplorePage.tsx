import React from 'react';
import {Feed} from "features/Feed";
import {PageNavbar} from "shared/ui/PageNavbar/PageNavbar";

const ExplorePage = () => {
    return (
        <div>
            <PageNavbar navbarTitle={'explore'} />
            <Feed />
        </div>
    );
};

export default ExplorePage;
