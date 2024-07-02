import { useRef } from 'react'
import { useSelector } from 'react-redux'

import Offer from '../Offer/Offer.jsx'
import Modal from '../Modal/Modal.jsx'
import OFFERS from '../../js/offers.js'

export default function Offers({ data }) {
	const modal = useRef()
	const keywords = useSelector(state => state.keywordsArr)

	const globalOFFERS = OFFERS.map(offer => {
		const isArr = Array.isArray(offer.lang)
		if (isArr) {
			let arr = { ...offer, toFilter: [...offer.lang, ...offer.keywords, offer.companyName] }
			const lowerArr = arr.toFilter.map(k => k.toLowerCase())
			const uniqueArr = [...new Set(lowerArr)]
			arr = { ...arr, toFilter: uniqueArr }
			return arr
		} else {
			let arr = { ...offer, toFilter: [offer.lang, ...offer.keywords, offer.companyName] }
			const lowerArr = arr.toFilter.map(k => k.toLowerCase())
			const uniqueArr = [...new Set(lowerArr)]
			arr = { ...arr, toFilter: uniqueArr }
			return arr
		}
	})

	let offersArr
	switch (data) {
		case 'all':
			offersArr = globalOFFERS
			break
		case 'javascript':
			offersArr = globalOFFERS.filter(offer => {
				if (Array.isArray(offer.lang)) {
					return offer.lang.includes('JavaScript')
				} else {
					return offer.lang === 'JavaScript'
				}
			})
			break
		case 'java':
			offersArr = globalOFFERS.filter(offer => {
				if (Array.isArray(offer.lang)) {
					return offer.lang.includes('Java')
				} else {
					return offer.lang === 'Java'
				}
			})
			break
		case 'python':
			offersArr = globalOFFERS.filter(offer => {
				if (Array.isArray(offer.lang)) {
					return offer.lang.includes('Python')
				} else {
					return offer.lang === 'Python'
				}
			})
			break
		case 'cplusplus':
			offersArr = globalOFFERS.filter(offer => {
				if (Array.isArray(offer.lang)) {
					return offer.lang.includes('C++')
				} else {
					return offer.lang === 'C++'
				}
			})
			break
	}

	let arrOfSelectedKeywords = []
	for (const k of keywords) {
		arrOfSelectedKeywords.push(k.keyword.toLowerCase())
	}

	if (keywords.length > 0) {
		offersArr = offersArr.filter(o => {
			let newArr = o.toFilter.filter(k => arrOfSelectedKeywords.includes(k.toLowerCase()))
			if (newArr.length >= keywords.length) {
				return true
			} else {
				return false
			}
		})
	}

	return (
		<>
			<Modal ref={modal} />
			{offersArr.map(offer => (
				<Offer
					key={offer.id}
					id={offer.id}
					imgSrc={offer.img}
					imgAlt={offer.altImg}
					companyName={offer.companyName}
					position={offer.position}
					date={offer.publicDate}
					typeOfContract={offer.typeOfContract}
					place={offer.place}
					keywordsArr={offer.keywords}
					selectedKeywordsArr={arrOfSelectedKeywords}
				/>
			))}
		</>
	)
}
