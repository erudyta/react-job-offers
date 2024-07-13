import { useSelector } from 'react-redux'

import Offer from '../Offer/Offer.jsx'
import OFFERS from '../../js/offers.js'

import styles from './Offers.module.css'
export default function Offers({ data }) {
	const keywords = useSelector(state => state.keywords.keywordsArr)

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
		default:
			offersArr = []
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
			{offersArr.length === 0 && (
				<h1 className={styles['no-offers']}>No offers matching the given criteria were found.</h1>
			)}
			{offersArr.length > 0 &&
				offersArr.map(offer => (
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
