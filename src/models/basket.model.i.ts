import { IArticle } from "./article.model.i";

export interface IBasket {
    articles: IArticle[];
    totalItemCount: number;
    totalPrice: number;
}