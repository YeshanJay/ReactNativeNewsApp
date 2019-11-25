import { APIHelper } from "../apiHelper";
import { ServiceUrls } from "../../constants/serviceUrls";
import { UserLogin } from "../../models/userLogin";
import { UserAuthRequestDTD, UserAuthResponseDTD } from "./dtd/userAuth.dtd";
import { AxiosError } from "axios";



export class AuthService {

    /**
     * Authenticate the user.
     * 
     * @param username The user's username.
     * @param passwordHash The user's password hash.
     * 
     * @returns The `UserLogin` object.
     */
    static authenticateUser(username, passwordHash): Promise<UserLogin> {

        // const reqBody: UserAuthRequestDTD = {
        //     username: username,
        //     passwordHash: passwordHash
        // };

        return new Promise((resolve, reject) => {

            // TODO: Fake login.
            setTimeout(() => {

                const data: UserAuthResponseDTD = {
                    userId: 1,
                    token: null,
                    username: "test",
                    displayName: "Yeshan Jay",
                    firstName: "Yeshan",
                    lastName: "Jayasinghe",
                    email: "test@gmail.com"
                };

                const userLogin = UserLogin.createByAuth(data);

                if (userLogin) {
                    resolve(userLogin);
                } else {
                    resolve(null);
                }

            }, 2000);
        });
    }

}