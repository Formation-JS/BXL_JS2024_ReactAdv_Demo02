import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(demo)/demo/intro')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/demo/intro"!</div>
}
