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
								<a>
									<i className={tech.icon}></i>
									<span>{tech.name}</span>
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	)
}
