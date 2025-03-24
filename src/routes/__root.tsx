import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import Header from '../containers/header/header.tsx';

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <main className='p-3'>
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </>
  ),
});
