import { useSelector, useDispatch } from 'react-redux'
import { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { favsOffersAction } from '../../store/index.js'
import { createPortal } from 'react-dom'

import Offer from '../Offer/Offer'

import OFFERS from '../../js/offers'
import styles from './Modal.module.css'

const Modal = forwardRef(function Modal({}, ref) {
	const favs = useSelector(state => state.favs.favsArr)
	const dialog = useRef()
	const dispatch = useDispatch()

	const [isMondalOpened, setIsModalOpened] = useState(false)
	useImperativeHandle(ref, () => {
		return {
			open() {
				setIsModalOpened(true)
				dialog.current.showModal()
			},
			close() {
				setIsModalOpened(false)
				dialog.current.close()
			},
		}
	})
	const favsOffers = OFFERS.filter(o => favs.includes(o.id))

	function handleCLose() {
		setIsModalOpened(false)
		dialog.current.close()
	}

	function handleDeselect() {
		dispatch(favsOffersAction.deselectAll())
	}

	return createPortal(
		<dialog ref={dialog} className={styles.dialog}>
			{favs.length === 0 && <h1>No offers have been added to favorites</h1>}
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
					closeModal ={handleCLose}
					isModalOpened={isMondalOpened}
				/>
			))}
			<div className={styles.btns}>
				<button onClick={handleCLose}>Close</button>
				{favs.length > 0 && <button onClick={handleDeselect}>Deselect all</button>}
			</div>
		</dialog>,
		document.getElementById('modal')
	)
})

export default Modal
