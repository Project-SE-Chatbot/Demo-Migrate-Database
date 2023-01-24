import exp from "constants";

export type CreateUserParsm = {
    username: string;
    password: string;
}

export type UpdateUserParsm = {
    username: string;
    password: string;
}

export type CreateUserProfileParsm = {
    firstName: string;
    lastName: string;
    age: number;
    job: string;
}

export type CreateUserPostParsm = {
    title: string;
    description: string;
}

