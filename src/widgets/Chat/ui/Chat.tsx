import React, {useEffect, useState} from 'react';
import cls from './Chat.module.scss'
import {Button} from "antd";
import {useSelector} from "react-redux";
import {getUserCurrentData, getUserDataForLook} from "entities/User";
import defaultAvatar from "shared/assets/defaultAvatar.png";
// @ts-ignore
import {io} from "socket.io-client";

const socket = io('http://localhost:5000')

interface Message {
    _id: string;
    text: string;
    from: string;
    to: string;
}

export const Chat = () => {
    const chatUser = useSelector(getUserDataForLook)
    const currentUser = useSelector(getUserCurrentData)
    const [messageText, setMessageText] = useState<string>('');
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        socket.emit('getMessages', {to: chatUser._id, from: currentUser._id}, (response: Message[]) => {
            setMessages(response)
        })

        socket.on('message', function (res: Message[]) {
            setMessages(res)
        })
    }, [chatUser, currentUser._id]);

    const messageTextOnChange = (e: any) => {
        setMessageText(e.target.value)
    }

    const sendMessage = () => {
        setMessageText('')
        socket.emit('sendMessage', {from: currentUser._id, to: chatUser._id, text: messageText}, () => {})
    }

    return (
        <div className={cls.chat}>
            <div className={cls.chatInfo}>
                <img
                    className={cls.avatar}
                    src={chatUser.avatar ? `http://localhost:5000/${chatUser.avatar}` : defaultAvatar }
                    alt="avatar"/>
                {chatUser.full_name}
            </div>
            {messages.map((message: Message) => (
                <div key={message._id}>
                    {message.from === currentUser._id ? currentUser.full_name : chatUser.full_name}: {message.text}
                </div>
            ))}
            <div className={cls.messageForm}>
                <input
                    type="text"
                    value={messageText}
                    onChange={messageTextOnChange}
                />
                <Button onClick={sendMessage}>send</Button>
            </div>
        </div>
    );
};

