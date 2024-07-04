import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { keywordsAction, favsOffersAction } from '../../store/index.js'

import styles from './Offer.module.css'
export default function Offer({
	id,
	imgSrc,
	imgAlt,
	companyName,
	position,
	date,
	typeOfContract,
	place,
	keywordsArr,
	selectedKeywordsArr,
}) {
	const keywords = useSelector(state => state.keywords.keywordsArr)
	const favs = useSelector(state => state.favs.favsArr)
	const dispatch = useDispatch()

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

	function handleAddFav(offerId) {
		dispatch(favsOffersAction.add(offerId))
	}

	function handleDeleteFav(offerId) {
		console.log(favs)
		console.log(offerId)
		dispatch(favsOffersAction.delete(offerId))
	}

	return (
		<div className={styles['offers-container']}>
			<Link to={`/offer/` + id}>
				<img src={imgSrc} alt={imgAlt} />
				<div className={styles['offer-data']}>
					<div className={styles['company-info']}>
						<p>{companyName}</p>
						<p>{position}</p>
					</div>
					<div className={styles['offer-info']}>
						<span>{date}</span>
						<span>{typeOfContract}</span>
						<span>{place}</span>
					</div>
				</div>
			</Link>
			{keywordsArr.length > 0 && (
				<div className={styles['offer-keywords']}>
					{keywordsArr.map((key, index) => (
						<button
							onClick={() => handleAdd(key)}
							key={index}
							className={selectedKeywordsArr.includes(key.toLowerCase()) ? styles['active'] : ''}>
							{key}
						</button>
					))}
				</div>
			)}
			{favs.includes(id) ? (
				<button onClick={() => handleDeleteFav(id)}>
					<i className='bx bxs-star'></i>
				</button>
			) : (
				<button onClick={() => handleAddFav(id)}>
					<i className='bx bx-star'></i>
				</button>
			)}
		</div>
	)
}
