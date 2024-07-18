import { NavLink } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar.jsx'

import { useSelector } from 'react-redux'
import TECHS from '../../js/tech-data.js'

import styles from './Header.module.css'

export default function Header( {modalRef }) {
	const favs = useSelector(state => state.favs.favsArr)

	function handleClick() {
		modalRef.current.open()
	}
	
	return (
		<>
			<header className={styles.header}>
				<div className={styles.container}>
					<div className={styles.fav}>
						<button onClick={handleClick}>
							<i className='bx bxs-star'></i>
							{favs.length > 0 && <span>{favs.length}</span>}
						</button>
						<span className={styles.tooltip}>Show Favourite Offers</span>
					</div>
					<SearchBar />
					<nav className={styles.nav}>
						<ul>
							{TECHS.map(tech => (
								<li key={tech.name}>
									<NavLink data-testid={tech.url} to={'/react-job-offers/' + tech.url} className={({ isActive }) => (isActive ? styles.active : undefined)} end>
										<i className={tech.icon}></i>
										<span>{tech.name}</span>
									</NavLink>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</header>
		</>
	)
}
