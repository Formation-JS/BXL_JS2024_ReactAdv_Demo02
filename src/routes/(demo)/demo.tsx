import { createFileRoute, Link, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/(demo)/demo')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1 className='text-5xl'>Redux</h1>
      <div className='flex gap-2 text-gray-400'>
        <Link to='/demo'>Index</Link>
        <Link to='/demo/intro'>Intro</Link>
        <Link to='/demo/42'>Params</Link>
      </div>

      <Outlet />
    </div>
  );
}
