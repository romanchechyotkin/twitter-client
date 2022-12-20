import {StateSchema} from "app/providers/StoreProvider";

export const getCreateTweetModalIsVisible = (state: StateSchema) => state.tweetFormModal.isVisible
