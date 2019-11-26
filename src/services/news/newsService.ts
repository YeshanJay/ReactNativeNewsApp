import { APIHelper } from "../apiHelper";
import { ServiceUrls } from "../../constants/serviceUrls";
import { AxiosError } from "axios";
import { NewsResponseDTD, NewsErrorResponseDTD, TopHeadlineNewsParams, AllNewsParams } from "./dtd/news.dtd";



export class NewsService {

    static fetchTopHeadlines(keywords: string, params: TopHeadlineNewsParams): Promise<NewsResponseDTD> {
        const prms = [];
        if (keywords != undefined) {
            prms.push(`q=${keywords}`);
        }
        if (params) {
            if (params.category != undefined) {
                prms.push(`category=${params.category}`);
            }
            if (params.country != undefined) {
                prms.push(`country=${params.country}`);
            }
            if (params.page != undefined) {
                prms.push(`page=${params.page}`);
            }
            if (params.pageSize != undefined) {
                prms.push(`pageSize=${params.pageSize}`);
            }
        }

        let urlParams = "";
        if (prms.length) {
            urlParams = "&" + prms.join("&");
        }

        const reqUrl = `${ServiceUrls.API_NEWS_TOP_HEADLINES}/apiKey=${ServiceUrls.NEWSAPI_API_KEY}${urlParams}`

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

    static fetchAll(keywords: string, params: AllNewsParams): Promise<NewsResponseDTD> {
        const prms = [];
        if (keywords != undefined) {
            prms.push(`q=${keywords}`);
        }
        if (params) {
            if (params.sortBy != undefined) {
                prms.push(`sortBy=${params.sortBy}`);
            }
            if (params.page != undefined) {
                prms.push(`page=${params.page}`);
            }
            if (params.pageSize != undefined) {
                prms.push(`pageSize=${params.pageSize}`);
            }
        }

        let urlParams = "";
        if (prms.length) {
            urlParams = "&" + prms.join("&");
        }

        const reqUrl = `${ServiceUrls.API_NEWS_EVERYTHING}/apiKey=${ServiceUrls.NEWSAPI_API_KEY}${urlParams}`

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