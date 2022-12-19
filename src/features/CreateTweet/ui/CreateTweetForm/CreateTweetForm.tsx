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

const {TextArea} = Input

export const CreateTweetForm = () => {
    const tweetText = useSelector(getTweetText)
    const dispatch = useDispatch()

    const onChangeTweetText = (e: { target: { value: any; }; }) => {
        dispatch(createTweetActions.setText(e.target.value))
    }

    const click = () => {
        if (!tweetText) {
            return;
        }
        // @ts-ignore
        dispatch(createTweet(tweetText))
    }

    return (
        <div className={cls.tweetForm}>
            <AppLink
                className={cls.avatarLink}
                to={'/profile'}
                // to={AppRoutes.PROFILE}
            >
                <img className={cls.avatar} src={defaultAvatar} alt="avatar"/>
            </AppLink>
            <div className={cls.form}>
                <TextArea
                    className={cls.textarea}
                    placeholder="What's happening?"
                    bordered={false}
                    value={tweetText}
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
                            <img src="" alt=""/>
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

