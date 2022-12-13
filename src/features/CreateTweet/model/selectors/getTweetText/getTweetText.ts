import {StateSchema} from "app/providers/StoreProvider";

export const getTweetText = (state: StateSchema) => {
    return state?.tweetForm.text || ""
}
