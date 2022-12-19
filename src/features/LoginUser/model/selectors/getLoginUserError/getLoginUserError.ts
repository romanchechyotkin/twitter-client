import {StateSchema} from "app/providers/StoreProvider";

export const getLoginUserError = (state: StateSchema) => state?.loginUser?.error
