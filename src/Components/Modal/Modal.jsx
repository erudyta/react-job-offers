import { forwardRef, useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'

import styles from './Modal.module.css'

const Modal = forwardRef(function Modal({}, ref) {
	const dialog = useRef()
	useImperativeHandle(ref, () => {
		return {
			open() {
				dialog.current.showModal()
			},
		}
	})
	return createPortal(
		<dialog ref={dialog}>
			<form method='dialog'>
				<button>Close</button>
			</form>
		</dialog>,
		document.getElementById('modal')
	)
})

export default Modal
