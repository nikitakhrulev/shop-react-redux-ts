interface Category {
    name: string,
    image: string;
}

export interface TredingItem {
    id: number,
    title: string,
    price: number,
    description: string,
    images: Array<string>,
    category: Category;
}
