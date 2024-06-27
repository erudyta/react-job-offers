import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { keywordsAction } from '../../store/index.js'
import styles from './SearchBar.module.css'

export default function SearchBar() {
    const dispatch = useDispatch();

    const keywords = useSelector(state => state.keywords)
    console.log(keywords);

    const inputRef = useRef();

    function addHandler(){
        dispatch(keywordsAction.addKeyword(inputRef.current.value))
    }

	return (
		<>
			<div className={styles.search}>
				<div className={styles['search-bar']}>
					<i className='bx bx-search-alt-2'></i>
					<input type='text' maxLength='15' ref={inputRef}/>
					<div className={styles['keywords-container']}>
						<div className={styles['keyword']}>
							<p>asfasfas</p>
							<button>X</button>
						</div>
					</div>
				</div>
				<button onClick={addHandler}>add filter</button>
			</div>
		</>
	)
}
