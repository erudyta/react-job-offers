import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import OFFERS from './js/offers.js'

import Layout from './Components/Pages/Layout.jsx'
import ErrorPage from './Components/Pages/ErrorPage.jsx'
import Offers from './Components/Pages/Offers.jsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{ path: '/', element: <Offers text={'Global'} /> },
			{ path: '/javascript', element: <Offers text={'JS'} /> },
			{ path: '/java', element: <Offers text={'Java'} /> },
			{ path: '/python', element: <Offers text={'Python'} /> },
			{ path: '/cplusplus', element: <Offers text={'C++'} /> },
		],
	},
])

const newOFFERS = OFFERS.map(offer => {
	const isArr = Array.isArray(offer.lang)
	if (isArr) {
		return { ...offer, toFilter: [...offer.lang , ...offer.keyWords, offer.companyName] }
	}else {
		return { ...offer, toFilter: [offer.lang, ...offer.keyWords, offer.companyName] }
	}
})

export default function App() {
	return <RouterProvider router={router} />
}
