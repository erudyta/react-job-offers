import { Link } from 'react-router-dom'

import styles from './Offers.module.css'

let added = false;

export default function Offers({ offersArr }) {
	return (
		<>
			{offersArr.map(offer => (
				<a key={offer.id} className={styles['offers-container']}>
					<img src={offer.img} alt={offer.altImg} />
					<div>
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
						{offer.keyWords.map((key, index) => (
							<p key={index}>{key}</p>
						))}
					</div>
                    {added ? <i className='bx bxs-star'></i> : <i className='bx bx-star'></i> }
				</a>
			))}
		</>
	)
}
