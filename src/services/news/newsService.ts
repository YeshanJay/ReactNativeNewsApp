import { APIHelper } from "../apiHelper";
import { ServiceUrls } from "../../constants/serviceUrls";
import { UserLogin } from "../../models/userLogin";
import { UserAuthRequestDTD, UserAuthResponseDTD } from "./dtd/userAuth.dtd";
import { AxiosError } from "axios";
import { NewsResponseDTD, NewsErrorResponseDTD } from "./dtd/news.dtd";



export class NewsService {

    static fetchTopHeadlines(): Promise<NewsResponseDTD> {
        const reqUrl = `${ServiceUrls.API_NEWS_TOP_HEADLINES}/apiKey=${ServiceUrls.NEWSAPI_API_KEY}&country=us`

        return new Promise((resolve, reject) => {

            APIHelper.api.get<NewsResponseDTD>(reqUrl)
                .then((res) => {
                    const data = res.data;

                    resolve(data);
                })
                .catch((error: AxiosError<NewsErrorResponseDTD>) => {

                    reject(error);
                });

        });
    }

    static fetchAll(): Promise<NewsResponseDTD> {
        const reqUrl = `${ServiceUrls.API_NEWS_EVERYTHING}/apiKey=${ServiceUrls.NEWSAPI_API_KEY}`

        return new Promise((resolve, reject) => {

            APIHelper.api.get<NewsResponseDTD>(reqUrl)
                .then((res) => {
                    const data = res.data;

                    resolve(data);
                })
                .catch((error: AxiosError<NewsErrorResponseDTD>) => {

                    reject(error);
                });

        });
    }

}