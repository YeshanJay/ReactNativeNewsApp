
export class ServiceUrls {

    static NEWSAPI_API_KEY = "89ec7bcb054d439db226fcf3af8a2dba";


    static API_BASE_URL = "https://newsapi.org";

    static __API_MODULE_V2 = "/v2";

    

    /**
     * POST
     */
    static API_AUTH_LOGIN = null;

    /**
     * GET
     */
    static API_NEWS_TOP_HEADLINES = `${ServiceUrls.__API_MODULE_V2}/top-headlines`;

    /**
     * GET
     */
    static API_NEWS_EVERYTHING = `${ServiceUrls.__API_MODULE_V2}/everything`;


}
