import { NavLink } from 'react-router-dom'

import styles from './Header.module.css'
import TECHS from '../../js/tech-data.js'

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.add}>
					<input type='text' maxLength='15' />
					<button>add filter</button>
				</div>
				<div className={styles['tags-container']}>
					<p className={styles['tags-title']}>filters</p>
					<p className={styles['tags-empty']}>no filters</p>
				</div>
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
