import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './Components/Pages/Layout.jsx'
import ErrorPage from './Components/Pages/ErrorPage.jsx'
import Offers from './Components/Pages/Offers.jsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{ path: '/', element: <Offers text={'Global'}/> },
			{ path: '/javascript', element: <Offers text={'JS'}/> },
			{ path: '/java', element: <Offers text={'Java'}/> },
			{ path: '/python', element: <Offers text={'Python'}/> },
			{ path: '/cplusplus', element: <Offers text={'C++'}/> },
		],
	},
])

export default function App() {
	return <RouterProvider router={router} />
}
