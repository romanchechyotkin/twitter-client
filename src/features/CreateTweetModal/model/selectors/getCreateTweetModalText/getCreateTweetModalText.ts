import {StateSchema} from "app/providers/StoreProvider";

export const getCreateTweetModalText = (state: StateSchema) => {
    return state?.tweetFormModal.text || ""
}
