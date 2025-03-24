import { configureStore } from "@reduxjs/toolkit";
import plantReducer from "./plant/plant.reducer-v1.ts";

//? Le store Redux
const store = configureStore({
    reducer: {
        plant: plantReducer
    },
    devTools: import.meta.env.DEV
});

export default store;

//? Le typage
// Le type du store Redux
export type AppStore = typeof store

// Génération du typage du state du store automatique (via ReturnType)
export type RootState = ReturnType<AppStore['getState']>

// Génération du typager des méthodes dispatchable
export type AppDispatch = AppStore['dispatch']