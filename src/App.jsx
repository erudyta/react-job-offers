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

const jsOFFERS = globalOFFERS.filter(offer => {
	if(Array.isArray(offer.lang)){
		return offer.lang.includes('JavaScript')
	}else{
		return offer.lang === 'JavaScript'
	}
})

const javaOFFERS = globalOFFERS.filter(offer => {
	if(Array.isArray(offer.lang)){
		return offer.lang.includes('Java')
	}else{
		return offer.lang === 'Java'
	}
})

const pythonOFFERS = globalOFFERS.filter(offer => {
	if(Array.isArray(offer.lang)){
		return offer.lang.includes('Python')
	}else{
		return offer.lang === 'Python'
	}
})

const cOFFERS = globalOFFERS.filter(offer => {
	if(Array.isArray(offer.lang)){
		return offer.lang.includes('C++')
	}else{
		return offer.lang === 'C++'
	}
})

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{ path: '/', element: <Offers offersArr={globalOFFERS} /> },
			{ path: '/javascript', element: <Offers offersArr={jsOFFERS}/> },
			{ path: '/java', element: <Offers  offersArr={javaOFFERS}/> },
			{ path: '/python', element: <Offers  offersArr={pythonOFFERS}/> },
			{ path: '/cplusplus', element: <Offers offersArr={cOFFERS} /> },
		],
	},
])

export default function App() {
	return <RouterProvider router={router} />
}
