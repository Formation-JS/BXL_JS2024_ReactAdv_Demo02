import { useDispatch } from "react-redux";
import type { PlantData } from "../../@types/plant";
import { plantAdd } from "../../store/plant/plant.action.ts";
import { useActionState, useId } from "react";
import z from 'zod';

const plantAddSchema = z.object({
    name: z.string()
        .min(2)
        .trim(),
    location: z.string()
        .trim()
});

type PlantStateForm = {
    error: {
        name?: string[],
        location?: string[],
    } | null;
};

export default function PlantAddForm() {

    const inputId = useId();
    const dispatch = useDispatch();

    const handleAdd = (state: PlantStateForm, data: FormData): PlantStateForm => {
  
        const result = plantAddSchema.safeParse(Object.fromEntries(data.entries()));
        if (result.error) {
            return {
                error: result.error.flatten().fieldErrors
            };
        }

        const plant: PlantData = {
            ...result.data,
            isGiven: false
        };

        //! Interaction avec le store pour injecter les données
        //? Utiliser l'action créator pour générer un objet "action"
        const action = plantAdd(plant);
        //? Envoyer l'action vers le store Redux via la méthode "dispatch"
        dispatch(action);

        //? Vous pouvez le faire en une seul ligne aussi :p
        //  dispatch(plantAdd(plant));

        return {
            error: null
        };
    };

    const [plantFormState, handleAddAction] = useActionState(handleAdd, { error: null });

    return (
        <form action={handleAddAction}>
            <div className="mb-0.5">
                <label htmlFor={inputId + '-name'}>Nom</label>
                <input type="text" name="name" id={inputId + '-name'} />
                {plantFormState.error?.name && (
                    <span className="text-pink-700 font-bold pl-2">
                        {plantFormState.error?.name.join(', ')}
                    </span>
                )}
            </div>
            <div className="mb-0.5">
                <label htmlFor={inputId + '-location'}>Emplacement</label>
                <input type="text" name="location" id={inputId + '-location'} />
                {plantFormState.error?.location && (
                    <span className="text-pink-700 font-bold pl-2">
                        {plantFormState.error?.location.join(', ')}
                    </span>
                )}
            </div>
            <div>
                <button type="submit">Ajouter</button>
            </div>

        </form>
    );
}