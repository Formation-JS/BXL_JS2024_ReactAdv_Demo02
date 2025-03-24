
export type Plant = {
    id: string;
    name: string;
    location: string;
    isGiven: boolean;
};

export type PlantData = Omit<Plant, 'id'>;