import { APIHelper } from "../apiHelper";
import { ServiceUrls } from "../../constants/serviceUrls";
import { AxiosError } from "axios";
import { NewsResponseDTD, NewsErrorResponseDTD, TopHeadlineNewsParams, AllNewsParams } from "./dtd/news.dtd";
import { NewsModel } from "../../models/newsModel";



export class NewsService {

    static fetchNewsKeywords(): Promise<string[]> {

        return new Promise((resolve, reject) => {

            // TODO: Mock data.
            setTimeout(() => {
                const data = ["bitcoin", "apple", "earthquake", "animal"];

                resolve(data);
            }, 1000);
        });
    }


    private static fetchTopHeadlines(keywords?: string, params?: TopHeadlineNewsParams): Promise<NewsResponseDTD> {
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

        const reqUrl = `${ServiceUrls.API_NEWS_TOP_HEADLINES}?apiKey=${ServiceUrls.NEWSAPI_API_KEY}${urlParams}`

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

    private static fetchAll(keywords?: string, params?: AllNewsParams): Promise<NewsResponseDTD> {
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

        const reqUrl = `${ServiceUrls.API_NEWS_EVERYTHING}?apiKey=${ServiceUrls.NEWSAPI_API_KEY}${urlParams}`

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


    static fetchTopHeadlinesModel(keywords?: string, params?: TopHeadlineNewsParams): Promise<NewsModel[]> {

        return new Promise((resolve, reject) => {

            this.fetchTopHeadlines(keywords, params)
                .then((data) => {
                    const models: NewsModel[] = [];

                    if (data.articles) {
                        data.articles.forEach((article) => {
                            const model = new NewsModel();
                            model.updateFromJson(article);

                            models.push(model);
                        });
                    }


                    resolve(models);
                })
                .catch((error: AxiosError<NewsErrorResponseDTD>) => {

                    reject(error);
                });

        });
    }

    static fetchAllModel(keywords?: string, params?: AllNewsParams): Promise<NewsModel[]> {

        return new Promise((resolve, reject) => {

            this.fetchAll(keywords, params)
                .then((data) => {
                    const models: NewsModel[] = [];

                    if (data.articles) {
                        data.articles.forEach((article) => {
                            const model = new NewsModel();
                            model.updateFromJson(article);

                            models.push(model);
                        });
                    }


                    resolve(models);
                })
                .catch((error: AxiosError<NewsErrorResponseDTD>) => {

                    reject(error);
                });

        });
    }
}