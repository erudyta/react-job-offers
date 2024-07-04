import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './Components/Pages/Layout.jsx'
import ErrorPage from './Components/Pages/ErrorPage.jsx'
import Offers from './Components/Pages/Offers.jsx'
import OfferDetail from './Components/Pages/OfferDetail.jsx'


const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{ path: '/', element: <Offers data='all' />,  },
			{ path: '/javascript', element: <Offers data='javascript'/>,  },
			{ path: '/java', element: <Offers data='java'/> },
			{ path: '/python', element: <Offers data ='python'/> },
			{ path: '/cplusplus', element: <Offers data='cplusplus'/> },
			{ path: '/offer/:offerId', element: <OfferDetail/> },
		],
	},
])

export default function App() {
	return <RouterProvider router={router} />
}
