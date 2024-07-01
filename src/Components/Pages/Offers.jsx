import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

import { keywordsAction } from '../../store/index.js'
import OFFERS from '../../js/offers.js'
import styles from './Offers.module.css'

let added = false

export default function Offers({ data }) {
	const keywords = useSelector(state => state.keywordsArr)

	const dispatch = useDispatch()

	const globalOFFERS = OFFERS.map(offer => {
		const isArr = Array.isArray(offer.lang)
		if (isArr) {
			let arr = { ...offer, toFilter: [...offer.lang, ...offer.keywords, offer.companyName] }
			const lowerArr = arr.toFilter.map(k => k.toLowerCase())
			const uniqueArr = [... new Set(lowerArr)]
			arr = { ...arr, toFilter: uniqueArr }
			return arr
		} else {
			let arr = { ...offer, toFilter: [offer.lang, ...offer.keywords, offer.companyName] }
			const lowerArr = arr.toFilter.map(k => k.toLowerCase())
			const uniqueArr = [... new Set(lowerArr)]
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
		case 'cplusplus':
			offersArr = globalOFFERS.filter(offer => {
				if (Array.isArray(offer.lang)) {
					return offer.lang.includes('C++')
				} else {
					return offer.lang === 'C++'
				}
			})
	}

	let arrOfSelectedKeywords = []
	for (const k of keywords) {
		arrOfSelectedKeywords.push(k.keyword.toLowerCase())
	}

	// if (keywords.length > 0) {
	// 	offersArr = offersArr.filter(offer => {
	// 		for (const key of keywords) {
	// 			if (offer.toFilter.includes(key.keyword.toLowerCase())) {
	// 				return true
	// 			} else {
	// 				return false
	// 			}
	// 		}
	// 	})
	// }

	if (keywords.length > 0) {
		offersArr = offersArr.filter(o => {
			let newArr = o.toFilter.filter(k => arrOfSelectedKeywords.includes(k.toLowerCase()))
			console.log(newArr);
			if(newArr.length >= keywords.length){
				return true
			}else{
				return false
			}
		}
			
		)
	}

	function handleAdd(key) {
		let isExist = false

		for (const k of keywords) {
			if (k.keyword.toLowerCase() === key.toLowerCase()) {
				isExist = true
				dispatch(keywordsAction.deleteKeyword(k.id))
				break
			}
		}
		if (!isExist) {
			const randomId = Math.random()
			const newKeyword = {
				id: randomId,
				keyword: key,
			}
			dispatch(keywordsAction.addKeyword(newKeyword))
		}
	}

	return (
		<>
			{offersArr.map(offer => (
				<div key={offer.id} className={styles['offers-container']}>
					<Link to={`/offer/` + offer.id}>
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
					</Link>
					<div className={styles['offer-keywords']}>
						{offer.keywords.map((key, index) => (
							<button
								onClick={() => handleAdd(key)}
								key={index}
								className={arrOfSelectedKeywords.includes(key.toLowerCase()) ? styles['active'] : ''}>
								{key}
							</button>
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
				</div>
			))}
		</>
	)
}
