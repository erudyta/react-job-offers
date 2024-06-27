import { createSlice, configureStore } from '@reduxjs/toolkit'

const keywordsSlice = createSlice({
	name: 'keywords',
	initialState: { keywords: [] },
	reducers: {
		addKeyword(state, action) {
			return { keywords: [action.payload, ...state.keywords] }
		},
		deleteKeyword(state, action) {
			return
		},
	},
})

const store = configureStore({
	reducer: keywordsSlice.reducer,
})

export const keywordsAction = keywordsSlice.actions
export default store
