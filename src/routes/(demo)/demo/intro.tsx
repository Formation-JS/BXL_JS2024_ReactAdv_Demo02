import { createFileRoute } from '@tanstack/react-router'
import PlantAddForm from '../../../containers/plant/plant-add-form.tsx';
import PlantCleanup from '../../../containers/plant/plant-cleanup.tsx';

export const Route = createFileRoute('/(demo)/demo/intro')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <h2 className='text-4xl'>Interaction avec le store</h2>

      <h3 className='text-3xl'>Ajouter</h3>
      <PlantAddForm />

      <h3 className='text-3xl'>Effacer</h3>
      <PlantCleanup />
    </div>
  )
}
