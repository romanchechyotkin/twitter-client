import React from 'react';
import {PageNavbar} from "shared/ui/PageNavbar/PageNavbar";
import {useSelector} from "react-redux";
import {getUserDataForLook} from "entities/User";
import {Profile} from "widgets/Profile";

const ProfilePage = () => {
    const user = useSelector(getUserDataForLook)

    return (
        <div>
            <PageNavbar navbarTitle={user.full_name} />
            <Profile user={user} />
        </div>
    );
};

export default ProfilePage;
