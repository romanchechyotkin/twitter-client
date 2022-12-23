import React from 'react';
import cls from './CreateTweetForm.module.scss'
import {GifOutlined, PictureOutlined} from "@ant-design/icons";
import {PlanIcon} from 'shared/assets/icons/PlanIcon'
import {EmojiIcon} from 'shared/assets/icons/EmojiIcon'
import {PollIcon} from 'shared/assets/icons/PollIcon'
import {Button} from "antd";
import {AppLink} from "shared/ui/AppLink/AppLink";
import {useDispatch, useSelector} from "react-redux";
import {createTweetActions} from "../../model/slice/createTweetSlice";
import {getTweetText} from "../../model/selectors/getTweetText/getTweetText";
import {createTweet} from "../../model/services/createTweet/createTweet";
import defaultAvatar from 'shared/assets/defaultAvatar.png'
import {Input} from "antd";
import {
    createTweetModalActions,
    getCreateTweetModalIsVisible,
    getCreateTweetModalText
} from "features/CreateTweetModal";
import {getUserCurrentData, getUserPageForLook} from "entities/User";

const {TextArea} = Input

export const CreateTweetForm = () => {
    const user = useSelector(getUserCurrentData)
    const tweetText = useSelector(getTweetText)
    const createTweetModalIsVisible = useSelector(getCreateTweetModalIsVisible)
    const createTweetModalText = useSelector(getCreateTweetModalText)
    const dispatch = useDispatch()

    const userAvatar = user.avatar ? `http://localhost:5000/${user.avatar}` : defaultAvatar

    const onChangeTweetText = (e: { target: { value: any; }; }) => {
        if(createTweetModalIsVisible) {
            dispatch(createTweetModalActions.setText(e.target.value))
        } else {
            dispatch(createTweetActions.setText(e.target.value))
        }
    }

    const click = () => {
        if (!tweetText && !createTweetModalText) {
            return;
        }
        // @ts-ignore
        dispatch(createTweet(createTweetModalIsVisible ? createTweetModalText : tweetText))
    }

    const loadUserInfoForLook = () => {
        // @ts-ignore
        dispatch(getUserPageForLook(user._id))
    }

    return (
        <div className={cls.tweetForm}>
            {createTweetModalIsVisible ?
                <img className={cls.avatar} src={userAvatar} alt="avatar"/>
                :
                <AppLink
                    className={cls.avatarLink}
                    onClick={loadUserInfoForLook}
                    to={`/${user.user_name}`}

                >
                    <img className={cls.avatar} src={userAvatar} alt="avatar"/>
                </AppLink>
            }
            <div className={cls.form}>
                <TextArea
                    className={cls.textarea}
                    placeholder="What's happening?"
                    bordered={false}
                    value={createTweetModalIsVisible ? createTweetModalText : tweetText}
                    onChange={onChangeTweetText}
                    autoSize
                />
                <div className={cls.media}>
                    <ul className={cls.emojis}>
                        <li>
                            <PictureOutlined style={{fontSize: "22px", color: "#1DA1F2"}}/>
                        </li>
                        <li>
                            <GifOutlined style={{fontSize: "22px", color: "#1DA1F2"}}/>
                        </li>
                        <li>
                            <PollIcon />
                        </li>
                        <li>
                            <EmojiIcon />
                        </li>
                        <li>
                            <PlanIcon />
                        </li>
                        <li>
                            <img src="" alt=""/> {/* TODO: create geoposition*/}
                        </li>
                    </ul>
                    <Button
                        className={cls.tweetBtn}
                        type="primary"
                        size={"middle"}
                        onClick={click}
                    >
                        Tweet
                    </Button>
                </div>
            </div>
        </div>
    );
};

