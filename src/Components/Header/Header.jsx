import { NavLink } from 'react-router-dom'

import SearchBar from '../SearchBar/SearchBar.jsx'

import styles from './Header.module.css'
import TECHS from '../../js/tech-data.js'

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.fav}>
					<button>
						<i className='bx bxs-star'></i>
						<span>1</span>
					</button>
					<span className={styles.tooltip}>Show Favourite Offers</span>
				</div>
				<SearchBar />
				<nav className={styles.nav}>
					<ul>
						{TECHS.map(tech => (
							<li key={tech.name}>
								<NavLink to={`/` + tech.url} className={({ isActive }) => (isActive ? styles.active : undefined)} end>
									<i className={tech.icon}></i>
									<span>{tech.name}</span>
								</NavLink>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	)
}
