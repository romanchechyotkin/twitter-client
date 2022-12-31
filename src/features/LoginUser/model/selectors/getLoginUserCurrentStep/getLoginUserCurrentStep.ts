import {StateSchema} from "app/providers/StoreProvider";

export const getLoginUserCurrentStep = (state: StateSchema) => state?.loginUser?.currentStep || 0
