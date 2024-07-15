import Header from '../Components/Header/Header.jsx'
import { Provider } from 'react-redux'
import { setupStore } from '../store/index.js'

import { render, screen, fireEvent } from '@testing-library/react'
import { expect } from '@jest/globals'
import { MemoryRouter, BrowserRouter } from 'react-router-dom'

describe('Header component', () => {
	let store
	beforeEach(() => {
		store = setupStore({})
	})

	test('after click onk lin should navigate to javascript page', () => {
		// Arrange
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Header />
				</BrowserRouter>
			</Provider>
		)
		// Act
		const aLink = screen.getByTestId('javascript')
		fireEvent.click(aLink)
		// Assert
		expect(global.window.location.pathname).toContain('/javascript')
	})

	test('after click on lin should navigate to java page', () => {
		// Arrange
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Header />
				</BrowserRouter>
			</Provider>
		)
		// Act
		const aLink = screen.getByTestId('java')
		fireEvent.click(aLink)
		// Assert
		expect(global.window.location.pathname).toContain('/java')
	})

	test('after click on lin should navigate to python page', () => {
		// Arrange
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Header />
				</BrowserRouter>
			</Provider>
		)
		// Act
		const aLink = screen.getByTestId('python')
		fireEvent.click(aLink)
		// Assert
		expect(global.window.location.pathname).toContain('/python')
	})

	test('after click on lin should navigate to cplusplus page', () => {
		// Arrange
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Header />
				</BrowserRouter>
			</Provider>
		)
		// Act
		const aLink = screen.getByTestId('cplusplus')
		fireEvent.click(aLink)
		// Assert
		expect(global.window.location.pathname).toContain('/cplusplus')
	})

	test('after click on lin should navigate to home page', () => {
		// Arrange
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Header />
				</BrowserRouter>
			</Provider>
		)
		// Act
		const aLink = screen.getByTestId('')
		fireEvent.click(aLink)
		// Assert
		expect(global.window.location.pathname).toContain('/')
	})
})
