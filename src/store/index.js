import { createSlice, configureStore } from '@reduxjs/toolkit'

const keywordsSlice = createSlice({
	name: 'keywords',
	initialState: { keywordsArr: [], isActive: false },
	reducers: {
		addKeyword(state, action) {
			return { ...state, keywordsArr: [action.payload, ...state.keywordsArr] }
		},
		deleteKeyword(state, action) {
			return { ...state, keywordsArr: state.keywordsArr.filter(keyword => keyword.id !== action.payload) }
		},
		showKeywordWindow(state, action) {
			return { ...state, isActive: action.payload }
		},
	},
})

const favOffersSlice = createSlice({
	name: 'favOffers',
	initialState: { favsArr: [] },
	reducers: {
		add(state, action) {
			return { favsArr: [action.payload, ...state.favsArr] }
		},
		delete(state, action) {
			return { favsArr: state.favsArr.filter(id => id !== action.payload) }
		},
		deselectAll(){
			return { favsArr: []}
		}
	},
})

const store = configureStore({
	reducer: { keywords: keywordsSlice.reducer, favs: favOffersSlice.reducer },
})

export const keywordsAction = keywordsSlice.actions
export const favsOffersAction = favOffersSlice.actions
export default store
