export interface User {
    login?: string;
    name: string | null;
    avatar_url?: string;
    gravatar_id?:string;
    email?: string | null;
    company: string | null;
    location: string | null;
    bio: string | null;
    html_url?: string;
  }
  

export interface UserState {
    user: User | null;
    accessToken: string | null;
    loading: boolean;
    error: string | null;
}
