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

const store = configureStore({
	reducer: keywordsSlice.reducer,
})

export const keywordsAction = keywordsSlice.actions
export default store
