import { nanoid } from 'nanoid';
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import type { Plant, PlantData } from "../../@types/plant";
import fetchPlantSpecies from '../../services/plant.service.ts';
import type { RootState } from '../store.ts';

//! Action Creators
//! Ce sont des méthodes pour générer un objet "Action" -> { type:'', payload:... }

export const plantAdd = createAction('plant/add', (plant: PlantData) => {

    // Effect de bord lors de la creaction de l'action
    const data: Plant = {
        ...plant,
        id: nanoid(),
    };

    // Retourne le "payload" de l'action
    return {
        payload: data
    };
});

export const plantRemove = createAction('plant/remove', (id: string) => {
    return {
        payload: id
    };
});

export const plantMoveOut = createAction<string>('plant/move-out');

export const plantMoveIn = createAction<string>('plant/move-in');

export const plantRemoveAll = createAction('plant/burn-all');

export const plantSpeciesFetch = createAsyncThunk(
    'plant/fetch-species',
    async (name: string) => {

        await new Promise((resolve) => setTimeout(resolve, 1_000));
        return await fetchPlantSpecies(name);
    },
    {
        condition: (name: string, { getState }) => {
            const state = getState() as RootState;
            return !state.plant.search.isLoading;
        }
    }
);