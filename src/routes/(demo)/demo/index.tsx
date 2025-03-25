import { createFileRoute } from '@tanstack/react-router'
import PlantList from '../../../containers/plant/plant-list.tsx';

export const Route = createFileRoute('/(demo)/demo/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>      
      <h2 className='text-4xl'>Liste des plantes</h2>
      <PlantList />
    </div>
  )
}
