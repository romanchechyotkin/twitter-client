import {RegistrationUser} from "./ui/RegistrationUser";
import type {RegistrationUserSchema} from "./model/types/registrationUserSchema";
import {registrationUserActions, registrationUserReducer, registrationUserSlice } from "./model/slice/registrationUserSlice";
import { getRegistrationUserEmail } from "./model/selectors/getRegistrationUserEmail/getRegistrationUserEmail";
import { getRegistrationUserPassword } from "./model/selectors/getRegistrationUserPassword/getRegistrationUserPassword";
import { getRegistrationUserCurrentStep } from "./model/selectors/getRegistrationUserCurrentStep/getRegistrationUserCurrentStep";
import { getRegistrationUserIsVisible } from "./model/selectors/getRegistrationUserIsVisible/getRegistrationUserIsVisible";
import { getRegistrationUserUserName } from "./model/selectors/getRegistrationUserUserName/getRegistrationUserUserName";
import { getRegistrationUserFullName } from "./model/selectors/getRegistrationUserFullName/getRegistrationUserFullName";

export {
    RegistrationUser,
    RegistrationUserSchema,
    registrationUserSlice,
    registrationUserActions,
    registrationUserReducer,
    getRegistrationUserEmail,
    getRegistrationUserPassword,
    getRegistrationUserCurrentStep,
    getRegistrationUserIsVisible,
    getRegistrationUserUserName,
    getRegistrationUserFullName,
}
