

export interface UserAuthRequestDTD {
    username: string;
    passwordHash: string;
}

export interface UserAuthResponseDTD {
    userId: number;
    username: string;
    token: string;

    displayName: string;
    email: string;
    firstName: string;
    lastName: string;
}
