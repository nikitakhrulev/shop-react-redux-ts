import { TredingItem } from "../../../Interface/TredingItem";

async function getCheap(): Promise<TredingItem[]> {
    try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products/?price_max=100');
        if (!response.ok) {
            throw new Error('Failed to get items < $100');
        }
        const data: TredingItem[] = await response.json();
        return data
    } catch (error) {
        console.error('An error occured: ', error);
        throw error
    }
}

export { getCheap }