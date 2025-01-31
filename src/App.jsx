import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './Components/Pages/Layout.jsx'
import ErrorPage from './Components/Pages/ErrorPage.jsx'
import Offers from './Components/Pages/Offers.jsx'
import OfferDetail from './Components/Pages/OfferDetail.jsx'


const router = createBrowserRouter([
	{
		path: '/react-job-offers',
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{ path: '/react-job-offers', element: <Offers data='all' />,  },
			{ path: '/react-job-offers/javascript', element: <Offers data='javascript'/>,  },
			{ path: '/react-job-offers/java', element: <Offers data='java'/> },
			{ path: '/react-job-offers/python', element: <Offers data ='python'/> },
			{ path: '/react-job-offers/cplusplus', element: <Offers data='cplusplus'/> },
			{ path: '/react-job-offers/offer/:offerId', element: <OfferDetail/> }
		],
	},
])

export default function App() {
	return <RouterProvider router={router} />
}
