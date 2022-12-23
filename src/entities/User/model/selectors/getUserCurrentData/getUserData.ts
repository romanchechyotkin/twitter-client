import {StateSchema} from "app/providers/StoreProvider";

export const getUserCurrentData = (state: StateSchema) => state.user.currentUserData
