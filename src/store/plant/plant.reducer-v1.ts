import { createReducer } from "@reduxjs/toolkit";
import { plantAdd, plantMoveIn, plantMoveOut, plantRemove } from "./plant.action.ts";
import type { Plant } from "../../@types/plant";

//! Reducer
//! Méthode qui doit résoudre les actions 

//? Le type du state du Reducer
export type PlantStateReducer = {
    plants: Plant[];
    count: number;
};

//? Le state intial
const initialState = {
    plants: [],
    count: 0
};

//? Le Reducer
const plantReducer = createReducer<PlantStateReducer>(initialState, (builder) => {

    builder
        .addCase(plantAdd, (state, action) => {
            const plant = action.payload;

            return {
                ...state,
                plants: [...state.plants, plant],
                count: state.count + 1
            };
        })
        .addCase(plantRemove, (state, action) => {
            const plantId = action.payload;

            const plants = state.plants.filter(plant => plant.id !== plantId);
            return {
                ...state,
                plants,
                count: plants.length
            };
        })
        .addCase(plantMoveOut, (state, action) => {
            const plantId = action.payload;

            return {
                ...state,
                plants: state.plants.map(plant => plant.id !== plantId ? plant : { ...plant, isGiven: true }),
            };
        })
        .addCase(plantMoveIn, (state, action) => {
            const plantId = action.payload;

            return {
                ...state,
                plants: state.plants.map(plant => plant.id !== plantId ? plant : { ...plant, isGiven: false }),
            };
        });
});

export default plantReducer;