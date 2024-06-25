import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import OFFERS from './js/offers.js'

import Layout from './Components/Pages/Layout.jsx'
import ErrorPage from './Components/Pages/ErrorPage.jsx'
import Offers from './Components/Pages/Offers.jsx'

const globalOFFERS = OFFERS.map(offer => {
	const isArr = Array.isArray(offer.lang)
	if (isArr) {
		return { ...offer, toFilter: [...offer.lang , ...offer.keyWords, offer.companyName] }
	}else {
		return { ...offer, toFilter: [offer.lang, ...offer.keyWords, offer.companyName] }
	}
})

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{ path: '/', element: <Offers offersArr={globalOFFERS} /> },
			{ path: '/javascript', element: <Offers /> },
			{ path: '/java', element: <Offers  /> },
			{ path: '/python', element: <Offers  /> },
			{ path: '/cplusplus', element: <Offers  /> },
		],
	},
])

export default function App() {
	return <RouterProvider router={router} />
}
