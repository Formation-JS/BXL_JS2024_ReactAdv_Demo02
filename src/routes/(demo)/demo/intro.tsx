import { createFileRoute } from '@tanstack/react-router'
import PlantAddForm from '../../../containers/plant/plant-add-form.tsx';

export const Route = createFileRoute('/(demo)/demo/intro')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <h2 className='text-4xl'>Interaction avec le store</h2>
      
      <PlantAddForm />
    </div>
  )
}
