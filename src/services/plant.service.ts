import axios from 'axios';

export type PlantSpeciesRequest = {
    data: Array<{
        id: number;
        common_name: string;
        scientific_name: Array<string>;
        other_name: Array<string>;
        family: string | null;
        hybrid: string | null;
        authority: string | null;
        subspecies: string | null;
        cultivar: string | null;
        variety: string | null;
        species_epithet: string | null;
        genus: string | null;
    }>;
    to: number;
    per_page: number;
    current_page: number;
    from: number;
    last_page: number;
    total: number;
};

export type PlantSpecies = {
    name: string;
    family: string;
    genus: string;
};

export default async function fetchPlantSpecies(name: string): Promise<PlantSpecies[]> {

    const { data: requestData } = await axios.get<PlantSpeciesRequest>('species-list', {
        baseURL: 'https://perenual.com/api/v2/',
        params: {
            key: import.meta.env.VITE_PERENUAL_KEY,
            q: name
        }
    });

    return requestData.data.map(item => ({
        name: item.common_name,
        family: item.family ?? 'N/A',
        genus: item.genus ?? 'N/A'
    }));
}