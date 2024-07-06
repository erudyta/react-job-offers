import { useParams } from 'react-router-dom'

import OFFERS from '../../js/offers.js'

import styles from './OfferDetail.module.css'

export default function OfferDetail() {
	const params = useParams()

	const selectedOffer = OFFERS.filter(o => o.id === params.offerId)
	const offer = selectedOffer[0]

	return (
		<div className={styles['od-container']}>
			<div className={styles['od-header-container']}>
				<div className={styles['od-header']}>
					<img src={offer.img} alt={offer.altImg} />
					<div>
						<h1>{offer.position}</h1>
						<h2>{offer.companyName}</h2>
					</div>
				</div>
				<div className={styles['od-info']}>
					<div className={styles['od-info-content']}>
						<i class='bx bx-map-pin'></i>
						<p>{offer.place}</p>
					</div>
					<div className={styles['od-info-content']}>
						<i class='bx bx-time-five'></i>
						<p>{offer.publicDate}</p>
					</div>
					<div className={styles['od-info-content']}>
						<i class='bx bx-file'></i>
						<p>{offer.typeOfContract}</p>
					</div>
					<div className={styles['od-info-content']}>
						<i class='bx bx-cog'></i>
						<p>{offer.exp}</p>
					</div>
				</div>
			</div>
			<div className={styles['stack-techs']}>
				<h2>Tech stacks</h2>
				<div>
					{offer.keywords.map(k => (
						<p>{k}</p>
					))}
				</div>
			</div>
		</div>
	)
}
