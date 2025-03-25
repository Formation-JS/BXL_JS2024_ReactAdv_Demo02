import { createReducer } from "@reduxjs/toolkit";
import { plantAdd, plantMoveIn, plantMoveOut, plantRemove, plantRemoveAll } from "./plant.action.ts";
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
            if(plant) {
                plant.isGiven = true;
            }
        })
        .addCase(plantMoveIn, (state, action) => {
            const plantId = action.payload;

            const plant = state.plants.find(p => p.id === plantId);
            if(plant) {
                plant.isGiven = false;
            }
        })
        .addCase(plantRemoveAll, (state) => {

            state.plants = [];
            state.count = 0;
        })
});

export default plantReducer;