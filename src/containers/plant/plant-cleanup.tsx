import { useDispatch } from "react-redux";
import { plantRemoveAll } from "../../store/plant/plant.action.ts";

export default function PlantCleanup() {
    
    const dispatch = useDispatch();

    const handleClean = () => {
    
        dispatch(plantRemoveAll());
    }

    return (
        <button onClick={handleClean}>Vider la liste</button>
    );
}