import React from 'react';
import cls from './CreateTweetModal.module.scss'
import {CreateTweetForm} from "features/CreateTweet";
import {classNames} from "shared/lib/classNames/classNames";
import {useDispatch, useSelector} from "react-redux";
import {getCreateTweetModalIsVisible} from "../../model/selectors/getCreateTweetModalIsVisible/getCreateTweetModalIsVisible";
import {createTweetModalActions} from "../../model/slice/createTweetModalSlice";

export const CreateTweetModal = () => {
    const isVisible = useSelector(getCreateTweetModalIsVisible)
    const dispatch = useDispatch()

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const onclose = () => {
        dispatch(createTweetModalActions.closeCreateTweetModal())
        dispatch(createTweetModalActions.setText(''))
    }

    return (
        <div className={classNames(cls.tweetFormModal, {[cls.opened]: isVisible}, [])}>
            <div onClick={onclose} className={cls.overlay}>
                <div onClick={onContentClick} className={cls.content}>
                    <CreateTweetForm />
                </div>
            </div>
        </div>
    );
};

