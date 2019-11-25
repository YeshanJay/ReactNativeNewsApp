import { UserAuthResponseDTD } from "../services/auth/dtd/userAuth.dtd";

export class UserLogin {

    /**
     * @private
     */
    private static _instance = null;


    private __username: string = null;
    private __userId: number = null;
    private __token: string = null;

    private _displayName: string = null;
    private _firstName: string = null;
    private _lastName: string = null;
    
    private constructor() {

    }


    static get isAuthenticated(): boolean {
        return (UserLogin._instance != null);
    }

    static get instance(): UserLogin {
        if (UserLogin._instance == null) {
            // UserLogin._instance = new UserLogin();

            throw "User login has not been created with authenticated credentials.";
        }

        return UserLogin._instance;
    }


    static createByAuth(authObj: UserAuthResponseDTD): UserLogin {
        this.clearLogin();

        if (authObj) {
            const userLogin = new UserLogin();
            userLogin.__userId = authObj.userId;
            userLogin.__token = authObj.token;
            userLogin.__username = authObj.username;

            userLogin._displayName = authObj.displayName;
            userLogin._firstName = authObj.firstName;
            userLogin._lastName = authObj.lastName;
            

            return UserLogin._instance = userLogin;
        }

        return null;
    }

    static clearLogin(): void {
        if (UserLogin._instance != null) {
            UserLogin._instance = null;
        }
    }


    get username(): string {
        return this.__username;
    };

    get userId(): number {
        return this.__userId;
    };

    get authToken(): string {
        return this.__token;
    };


    get displayName(): string {
        return this._displayName;
    };

    get firstName(): string {
        return this._firstName;
    };

    get lastName(): string {
        return this._lastName;
    };

}

