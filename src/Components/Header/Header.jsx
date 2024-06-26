import { NavLink } from 'react-router-dom'

import styles from './Header.module.css'
import TECHS from '../../js/tech-data.js'

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.search}>
					<div className={styles['search-bar']}>
						<i className='bx bx-search-alt-2'></i>
						<input type='text' maxLength='15' />
						<div className={styles['keywords-container']}>
							<div className={styles['keyword']}>
								<p>asfasfas</p>
								<button>X</button>
							</div>
						</div>
					</div>
					<button>add filter</button>
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
