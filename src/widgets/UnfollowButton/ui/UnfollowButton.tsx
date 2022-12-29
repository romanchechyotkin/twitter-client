import React from 'react';
import {Button} from "antd";
import {useDispatch} from "react-redux";
import {unfollowUser} from "entities/User";

export interface UnfollowButtonProps {
    id: string
}

export const UnfollowButton: React.FC<UnfollowButtonProps> = ({id}) => {
    const dispatch = useDispatch()

    const unfollow = () => {
        // @ts-ignore
        dispatch(unfollowUser(id))
    }

    return (
        <Button onClick={unfollow}>
            Unfollow
        </Button>
    );
};
