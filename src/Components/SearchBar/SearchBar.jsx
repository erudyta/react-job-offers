import { useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { keywordsAction } from '../../store/index.js'
import styles from './SearchBar.module.css'

export default function SearchBar() {
	const dispatch = useDispatch()
	const keywordsArr = useSelector(state => state.keywordsArr)
	const isActive = useSelector(state => state.isActive)

	const inputRef = useRef()
	const divKeywordContainerRef = useRef()
	const searchBarRef = useRef()

	function handleAdd(e) {
		const id = Math.random()
		const keyword = inputRef.current.value.trim('')
		if (keyword.length > 0 && !keywordsArr.some(e => e.keyword === keyword)) {
			const newKeyword = {
				id: id,
				keyword: keyword,
			}
			dispatch(keywordsAction.addKeyword(newKeyword))
			dispatch(keywordsAction.showKeywordWindow(true))
			inputRef.current.value = ''
		}
		return
	}

	function handleDelete(id) {
		dispatch(keywordsAction.deleteKeyword(id))
	}

	function handleShowAddedKeywords() {
		if (keywordsArr.length > 0) dispatch(keywordsAction.showKeywordWindow(true))
	}

	useEffect(() => {
		function handleClickOutside(event) {
			if (
				divKeywordContainerRef.current &&
				!divKeywordContainerRef.current.contains(event.target) &&
				searchBarRef.current &&
				!searchBarRef.current.contains(event.target)
			) {
				dispatch(keywordsAction.showKeywordWindow(false))
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	return (
		<>
			<div className={styles.search}>
				<div className={styles['search-bar']} ref={searchBarRef}>
					<i className='bx bx-search-alt-2'></i>
					{keywordsArr.length > 0 && (
						<button className={styles['keyword-counter']} onClick={handleShowAddedKeywords}>
							{keywordsArr.length}
						</button>
					)}
					<input
						type='text'
						maxLength='15'
						ref={inputRef}
						onFocus={handleShowAddedKeywords}
						onKeyDown={e => {
							if (e.key === 'Enter') handleAdd()
						}}
					/>
					{keywordsArr.length > 0 && (
						<div
							className={` ${styles['keywords-container']} ${isActive ? styles['active'] : ''}`}
							ref={divKeywordContainerRef}>
							{keywordsArr.map((keyword, index) => (
								<div key={index} className={styles['keyword']}>
									<p>{keyword.keyword}</p>
									<button onClick={() => handleDelete(keyword.id)}>X</button>
								</div>
							))}
						</div>
					)}
				</div>
				<button onClick={handleAdd}>add filter</button>
			</div>
		</>
	)
}
