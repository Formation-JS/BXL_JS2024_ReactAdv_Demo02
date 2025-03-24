import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(demo)/demo/$id/')({
  component: RouteComponent,
})

function RouteComponent() {
  const {id} = Route.useParams();

  return <div>Hello "/demo/{id}/"!</div>
}
