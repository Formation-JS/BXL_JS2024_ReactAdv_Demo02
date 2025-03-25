import { nanoid } from 'nanoid';
import { createAction } from "@reduxjs/toolkit";
import type { Plant, PlantData } from "../../@types/plant";

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
