import Header from '../Header/Header.jsx'

import styles from './ErrorPage.module.css'

export default function Error() {
	return (
		<>
			<Header />
			<main className={styles.error}>
				<h1>An error occured!</h1>
				<p>Could not find this page.</p>
			</main>
		</>
	)
}
