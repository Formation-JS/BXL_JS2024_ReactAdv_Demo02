import { createFileRoute } from '@tanstack/react-router';
import { useDispatch } from 'react-redux';
import { plantSpeciesFetch } from '../../../store/plant/plant.action.ts';
import type { AppDispatch } from '../../../store/store.ts';

export const Route = createFileRoute('/(demo)/demo/request')({
  component: RouteComponent,
});

function RouteComponent() {

  const dispatch = useDispatch<AppDispatch>();
  const handleTest = () => {
    dispatch(plantSpeciesFetch('Monstera'));
  }

  return (
    <div>
      <h2 className='text-4xl'>Requete AJAX avec le store</h2>
      <button onClick={handleTest}>Test ?</button>
    </div>
  );
}
