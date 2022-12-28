export interface UserSchema {
    isAuth: boolean;
    currentUserData: User,
    user: User,
}

export interface User {
    _id: string;
    email: string;
    avatar: string;
    full_name: string;
    user_name: string;
    follows: [],
    followers: [],
    isConfirmed: boolean;
}
