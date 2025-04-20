import { createBrowserRouter } from 'react-router-dom';
import { ROUTER_PATH } from './router-path.ts';
import App from '../App.tsx';

export const appRouter = createBrowserRouter([
	{
		path: ROUTER_PATH.MAIN,
		element: <App />,
	},
]);
