import { useSelector } from "react-redux";
import type { RootState } from "../../store/store.ts";
import type { Plant } from "../../@types/plant";
import clsx from 'clsx';

//? Le typage des props du composant "PlantListItem" (basé sur le type "Plant")
type PlantListItemProps = Plant & {
    onDemo: () => void;
};
function PlantListItem({ id, name, location, isGiven }: PlantListItemProps) {
    return (
        <article className={clsx(isGiven && 'text-gray-400 line-through')}>
            {name} ({location})
        </article>
    );
}

export default function PlantList() {

    //? Type explicit
    // const plants = useSelector<RootState, Plant[]>((state) => state.plant.plants);

    //? Type implicit (Base sur le params de la fonction)
    const plants = useSelector((state: RootState) => state.plant.plants);

    return (
        <div>
            {plants.map(plant => <PlantListItem key={plant.id} {...plant} />)}
        </div>
    );
}