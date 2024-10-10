interface Category {
    name: string,
    image: string;
}

export interface CardItem {
    id: number,
    title: string,
    price: number,
    description: string,
    images: Array<string>,
    category: Category;
}
