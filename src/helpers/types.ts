export interface User {
    name: string;
    avatar: string;
}

export interface UserState {
    user: User | null;
    repos: any[];
    accessToken: string | null;
    loading: boolean;
    error: string | null;
}
