import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { keywordsAction } from '../../store/index.js'

import styles from './Offer.module.css'
let added
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
	const keywords = useSelector(state => state.keywordsArr)
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
			{added ? (
				<button>
					<i className='bx bxs-star'></i>
				</button>
			) : (
				<button>
					<i className='bx bx-star'></i>
				</button>
			)}
		</div>
	)
}
