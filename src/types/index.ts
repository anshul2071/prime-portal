export interface  AdminRegisterPayload{
    email : string;
    password : string;
    name: string;
}


export interface AdminLoginPayload {
    email: string;
    password: string;

}


export interface AuthResponse {
    token : string;
}


export const ALLOWED_DOMAIN = '@rcl.com';


export  interface Game {
    _id: string;
    title: string;
    description: string;
    image?: string;
    genre: string;
    link: string;
    platform: string;
    releaseDate: string;

}

export type NewGameInput = Omit <Game, '_id'>;


export interface Job {
    _id: string;
    title: string;
    description: string;
    location: string;

    applyLink: string;
}

export type NewJobInput = Omit <Job, '_id'>;


export interface NavLinkItem {
    to: string;
    label: string;
}


export interface AdminJobFormValues {
  title: string;
  location: string;
  description: string;
  applyLink: string;
}