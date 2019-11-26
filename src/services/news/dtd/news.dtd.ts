import { NEWS_CATEGORY_ENUM } from "../../../enums/news.enum";


export interface TopHeadlineNewsParams {
    country?: string;
    category?: NEWS_CATEGORY_ENUM;
    pageSize?: number;
    page?: number;
}

export interface AllNewsParams {
    sortBy?: string;
    pageSize?: number;
    page?: number;
}


export interface NewsArticleDTD {
    source: {
        id: string;
        name: string;
    },
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    /**
     * FORMAT: 2019-11-26T10:12:00Z
     */
    publishedAt: string;
    content: string;
}

export interface NewsResponseDTD {
    status: "ok",
    totalResults: number;
    articles: NewsArticleDTD[];
}


export interface NewsErrorResponseDTD {
    status: "error";
    code: string;
    message: string;
}
