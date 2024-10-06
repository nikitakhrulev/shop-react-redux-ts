import { TredingItem } from "../../../Interface/TredingItem";

async function getTrending(): Promise<TredingItem[]> {
    try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        if (!response.ok) {
            throw new Error('Failed to fetch data!')
        }
        const data: TredingItem[] = await response.json();
        return data
    } catch (error) {
        console.error('Failed to fetch data: ', error);
        throw error
    }
}

export { getTrending }