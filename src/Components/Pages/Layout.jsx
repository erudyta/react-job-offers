import { Outlet } from 'react-router-dom'
import { useRef } from 'react'
import Modal from '../Modal/Modal.jsx'

import Header from '../Header/Header.jsx'

export default function Layout() {
	const modal = useRef()
	return (
		<>
			<Modal ref={modal} />
			<Header modalRef ={modal}/>
			<main>
				<Outlet />
			</main>
		</>
	)
}
