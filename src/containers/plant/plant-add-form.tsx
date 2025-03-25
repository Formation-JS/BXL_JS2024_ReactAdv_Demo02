import { useDispatch } from "react-redux";
import type { PlantData } from "../../@types/plant";
import { plantAdd } from "../../store/plant/plant.action.ts";


export default function PlantAddForm() {

    const dispatch = useDispatch();

    const handleAdd = (data: FormData) => {

        // TODO Créer un formulaire pour obtenir les données
        const plant: PlantData = {
            name: 'Rose',
            location: 'Salon',
            isGiven: false
        }

        //! Interaction avec le store pour injecter les données
        //? Utiliser l'action créator pour générer un objet "action"
        const action = plantAdd(plant);
        //? Envoyer l'action vers le store Redux via la méthode "dispatch"
        dispatch(action);

        //? Vous pouvez le faire en une seul ligne aussi :p
        //  dispatch(plantAdd(plant));
    }

    return (
        <form action={handleAdd}>
            <div>
                <span>Pas d'input pour simplifier la démo :o</span>
            </div>
            <div>
                <button type="submit">Ajouter</button>
            </div>
        </form>
    )
}