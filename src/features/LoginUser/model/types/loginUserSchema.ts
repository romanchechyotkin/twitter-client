export interface LoginUserSchema {
    isVisible: boolean;
    isLoading: boolean;
    error?: string;
    email: string;
    password: string;
    currentStep: number;
}
