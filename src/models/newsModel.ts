import { NewsArticleDTD } from "../services/news/dtd/news.dtd";
import moment from "moment";

export class NewsModel {

    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    /**
     * FORMAT: 2019-11-26T10:12:00Z
     */
    publishedAt: Date = null;
    content: string;

    sourceName: string;

    constructor() {

    }

    updateFromJson(data: NewsArticleDTD) {
        this.author = data.author;
        this.title = data.title;
        this.description = data.description;
        this.url = data.url;
        this.urlToImage = data.urlToImage;
        this.content = data.content;

        if (data.publishedAt) {
            this.publishedAt = moment(data.publishedAt).toDate();
        }

        if (data.source) {
            this.sourceName = data.source.name;
        }

    }

}