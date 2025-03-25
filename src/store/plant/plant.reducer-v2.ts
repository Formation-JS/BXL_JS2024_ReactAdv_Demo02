import { createReducer } from "@reduxjs/toolkit";
import { plantAdd, plantMoveIn, plantMoveOut, plantRemove, plantRemoveAll, plantSpeciesFetch } from "./plant.action.ts";
import type { Plant } from "../../@types/plant";
import type { PlantSpecies } from "../../services/plant.service.ts";

//! Reducer
//! Méthode qui doit résoudre les actions 

//? Le type du state du Reducer
export type PlantStateReducer = {
    plants: Plant[];
    count: number;
    search: {
        isLoading: boolean,
        query: string | null,
        result: PlantSpecies[] | null,
        error: string | null;
    };
};

//? Le state intial
const initialState: PlantStateReducer = {
    plants: [],
    count: 0,
    search: {
        isLoading: false,
        query: null,
        result: null,
        error: null
    }
};

//? Le Reducer
const plantReducer = createReducer<PlantStateReducer>(initialState, (builder) => {

    builder
        .addCase(plantAdd, (state, action) => {
            const plant = action.payload;

            state.plants.push(plant);
            state.count++;
        })
        .addCase(plantRemove, (state, action) => {
            const plantId = action.payload;

            state.plants = state.plants.filter(plant => plant.id !== plantId);
            state.count = state.plants.length;
        })
        .addCase(plantMoveOut, (state, action) => {
            const plantId = action.payload;

            const plant = state.plants.find(p => p.id === plantId);
            if (plant) {
                plant.isGiven = true;
            }
        })
        .addCase(plantMoveIn, (state, action) => {
            const plantId = action.payload;

            const plant = state.plants.find(p => p.id === plantId);
            if (plant) {
                plant.isGiven = false;
            }
        })
        .addCase(plantRemoveAll, (state) => {

            state.plants = [];
            state.count = 0;
        })
        .addCase(plantSpeciesFetch.pending, (state, action) => {
            state.search.isLoading = true;
            state.search.query = action.meta.arg.trim().toLocaleLowerCase();
            state.search.result = null;
            state.search.error = null;
        })
        .addCase(plantSpeciesFetch.fulfilled, (state, action) => {
            state.search.isLoading = false;
            state.search.result = action.payload;
        })
        .addCase(plantSpeciesFetch.rejected, (state, action) => {
            state.search.isLoading = false;
            state.search.error = action.error?.message ?? 'Une erreur est survenu !'
        });
});

export default plantReducer;