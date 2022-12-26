export interface RegistrationUserSchema {
    isVisible: boolean;
    isLoading: boolean;
    error?: string;
    email: string;
    password: string;
    userName: string;
    fullName: string;
    currentStep: number;
}
