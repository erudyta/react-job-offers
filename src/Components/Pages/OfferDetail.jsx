import { useParams, Link } from 'react-router-dom'

import OFFERS from '../../js/offers.js'

import styles from './OfferDetail.module.css'

export default function OfferDetail() {
	const params = useParams()

	const selectedOffer = OFFERS.filter(o => o.id === params.offerId)
	const offer = selectedOffer[0]

	return (
		<div className={styles['od-container']}>
			<div className={styles.od}>
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
							<i className='bx bx-map-pin'></i>
							<p>{offer.place}</p>
						</div>
						<div className={styles['od-info-content']}>
							<i className='bx bx-time-five'></i>
							<p>{offer.publicDate}</p>
						</div>
						<div className={styles['od-info-content']}>
							<i className='bx bx-file'></i>
							<p>{offer.typeOfContract}</p>
						</div>
						<div className={styles['od-info-content']}>
							<i className='bx bx-cog'></i>
							<p>{offer.exp}</p>
						</div>
					</div>
				</div>
				<div className={styles['stack-techs']}>
					<h2>Tech stacks</h2>
					<div>
						{offer.keywords.map(k => (
							<p key={k}>{k}</p>
						))}
					</div>
				</div>
				<div className={styles['od-detail']}>
					<div className={styles['od-description']}>
						<h2>{offer.companyName}</h2>
						<p>{offer.aboutCompany}</p>
					</div>
					<div className={styles['od-req-container']}>
						<h2>Requirements</h2>
						{offer.req.map((req, index) => (
							<div key={index} className={styles['od-req']}>
								<i className='bx bx-right-arrow-alt'></i> <p>{req}</p>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className={styles['od-apply-container']}>
				<button>
					<i className='bx bxs-megaphone'></i>Apply now!
				</button>
			</div>
		</div>
	)
}
