import { CategoriesItem } from "../../../Interface/CategoriesItem";

async function getCategories(): Promise<CategoriesItem[]> {
    try {
        const response = await fetch('https://api.escuelajs.co/api/v1/categories');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data: CategoriesItem[] = await response.json();
        return data
    } catch (error) {
        console.error('Failed to get categories: ', error);
        throw error
    }
}

export { getCategories }



