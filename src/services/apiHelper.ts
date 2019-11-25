
import Axios, { AxiosInstance } from "axios";
import { ServiceUrls } from "../constants/serviceUrls";
import { UserLogin } from "../models/userLogin";
import AxiosLogger from 'axios-logger';


export class APIHelper {

    /**
     * @private
     */
    private static _instance: APIHelper = null;

    /**
     * @private
     */
    private _axios: AxiosInstance = null;

    /**
     * @private
     */
    private constructor() {

    }

    /**
     * Gets the instance.
     */
    static get instance(): APIHelper {
        if (APIHelper._instance == null) {
            APIHelper._instance = new APIHelper();

            const headers = {};

            if (UserLogin.isAuthenticated && UserLogin.instance.authToken) {
                headers["Authorization"] = `Bearer ${UserLogin.instance.authToken}`;
            }

            APIHelper._instance._axios = Axios.create({
                baseURL: ServiceUrls.API_BASE_URL,
                headers
            });

            APIHelper._instance._axios.interceptors.request.use(AxiosLogger.requestLogger);
        }

        return APIHelper._instance;
    }

    /**
     * Gets the instance of axios.
     */
    static get api(): AxiosInstance {
        if (!APIHelper.instance) {
            return null;
        }

        return APIHelper.instance._axios;
    }

    /**
     * Clears the instance of axios.
     */
    static clearInstance(): void {
        APIHelper.instance._axios = null;
        APIHelper._instance = null;
    }

}


