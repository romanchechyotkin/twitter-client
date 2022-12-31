import {StateSchema} from "app/providers/StoreProvider";

export const getLoginUserPassword = (state: StateSchema) => state?.loginUser?.password || ''
