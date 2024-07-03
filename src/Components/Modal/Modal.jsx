import { useSelector } from 'react-redux'
import { forwardRef, useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'

import Offer from '../Offer/Offer'

import OFFERS from '../../js/offers'
import styles from './Modal.module.css'
const Modal = forwardRef(function Modal({}, ref) {
	const favs = useSelector(state => state.favs.favsArr)
	const dialog = useRef()

	useImperativeHandle(ref, () => {
		return {
			open() {
				dialog.current.showModal()
			},
		}
	})
	const favsOffers = OFFERS.filter(o => favs.includes(o.id))

	return createPortal(
		<dialog ref={dialog} className={styles.dialog}>
			{favsOffers.map(offer => (
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
					keywordsArr={[]}
					selectedKeywordsArr={[]}
				/>
			))}
			<form method='dialog'>
				<button>Close</button>
			</form>
		</dialog>,
		document.getElementById('modal')
	)
})

export default Modal
