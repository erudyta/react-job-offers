import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'
import OFFERS from '../../js/offers.js'
import styles from './Offers.module.css'

let added = false

export default function Offers({ data }) {
	const keywords = useSelector(state => state.keywordsArr)

	const globalOFFERS = OFFERS.map(offer => {
		const isArr = Array.isArray(offer.lang)
		if (isArr) {
			return { ...offer, toFilter: [...offer.lang, ...offer.keywords, offer.companyName] }
		} else {
			return { ...offer, toFilter: [offer.lang, ...offer.keywords, offer.companyName] }
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
		case 'cplusplus':
			offersArr = globalOFFERS.filter(offer => {
				if (Array.isArray(offer.lang)) {
					return offer.lang.includes('C++')
				} else {
					return offer.lang === 'C++'
				}
			})
	}

	if (keywords.length > 0) {
		offersArr = offersArr.filter(offer => {
			for (const key of keywords) {
				if (offer.keywords.includes(key.keyword)) {
					return true
				} else {
					return false
				}
			}
		})
	}

	return (
		<>
			{offersArr.map(offer => (
				<a key={offer.id} className={styles['offers-container']}>
					<img src={offer.img} alt={offer.altImg} />
					<div className={styles['offer-data']}>
						<div className={styles['company-info']}>
							<p>{offer.companyName}</p>
							<p>{offer.position}</p>
						</div>
						<div className={styles['offer-info']}>
							<span>{offer.publicDate}</span>
							<span>{offer.typeOfContract}</span>
							<span>{offer.place}</span>
						</div>
					</div>
					<div className={styles['offer-keywords']}>
						{offer.keywords.map((key, index) => (
							<p key={index}>{key}</p>
						))}
					</div>
					{added ? (
						<button>
							<i className='bx bxs-star'></i>{' '}
						</button>
					) : (
						<button>
							<i className='bx bx-star'></i>
						</button>
					)}
				</a>
			))}
		</>
	)
}
