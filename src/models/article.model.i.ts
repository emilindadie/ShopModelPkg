import { Icategory } from "./category.model.i";

export interface IArticle {
    id: string;
    name: string;
    description: string;
    descriptionPictureUrl: string;
    price: number;
    category: Icategory;
}