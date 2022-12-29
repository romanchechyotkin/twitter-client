import { Button } from 'antd';
import React from 'react';
import {followUser} from "entities/User";
import {useDispatch} from "react-redux";

export interface FollowButtonProps {
    id: string
}

export const FollowButton: React.FC<FollowButtonProps> = ({id}) => {
    const dispatch = useDispatch()

    const follow = () => {
        // @ts-ignore
        dispatch(followUser(id))
    }

    return (
        <Button onClick={follow}>
            Follow
        </Button>
    );
};
