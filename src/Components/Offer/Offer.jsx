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
	closeModal,
	isModalOpened,
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
		dispatch(favsOffersAction.delete(offerId))
	}

	function handleCloseModal() {
		if (isModalOpened) {
			closeModal()
		}
	}

	return (
		<div className={styles['offers-container']}>
			<Link to={`/offer/` + id} onClick={handleCloseModal}>
				<img src={imgSrc} alt={imgAlt} />
				<div className={styles['offer-data']}>
					<div className={styles['company-info']}>
						<h2>{companyName}</h2>
						<h1>{position}</h1>
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
				<button data-testid="filled-star" onClick={() => handleDeleteFav(id)}>
					<i className='bx bxs-star'></i>
				</button>
			) : (
				<button data-testid="empty-star" onClick={() => handleAddFav(id)}>
					<i className='bx bx-star'></i>
				</button>
			)}
		</div>
	)
}
