import React from 'react';
import {UsersColumn} from "widgets/UsersColumn";
import {Chat} from "widgets/Chat";
import cls from './MessagesPage.module.scss'

const MessagesPage = () => {
    return (
        <div className={cls.messagePage}>
            <UsersColumn />
            <Chat />
        </div>
    );
};

export default MessagesPage;
