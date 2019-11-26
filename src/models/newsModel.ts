import { NewsArticleDTD } from "../services/news/dtd/news.dtd";

export class NewsModel {

    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    /**
     * FORMAT: 2019-11-26T10:12:00Z
     */
    publishedAt: Date;
    content: string;

    constructor() {

    }

    updateFromJson(data: NewsArticleDTD) {
        
    }

}