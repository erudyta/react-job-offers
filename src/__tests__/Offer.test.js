import Offer from '../Components/Offer/Offer'

import { Provider } from 'react-redux'

import {setupStore} from  '../store/index.js'

import { expect } from '@jest/globals'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

describe('Offer component tests', () => {
	let store
	beforeEach(() => {
		store = setupStore({})
	})

	test('generate link with given id', () => {
		// Arrange
		render(
			<Provider store={store}>
				<MemoryRouter>
					<Offer id='1' keywordsArr={[]} />
				</MemoryRouter>
			</Provider>
		)
		// Act
		//...
		// Assert
		const aElement = screen.getByRole('link')
		expect(aElement).toHaveProperty('href', 'https://test.com/offer/1')
	})

	test('render keywords section when array have elements', () => {
		// Arrange
		render(			
			<Provider store={store}>
				<MemoryRouter>
					<Offer keywordsArr={['HTML', 'JavaScript']} selectedKeywordsArr={['HTML', 'JavaScript']} />
				</MemoryRouter>
			</Provider>
		)
		// Act
		//...
		// Assert
		const outputElement1 = screen.getByText('html', { exact: false })
		const outputElement2 = screen.getByText('javascript', { exact: false })
		expect(outputElement1).toBeInTheDocument()
		expect(outputElement2).toBeInTheDocument()
	})

	test('delete empty button when empty button was clicked', () => {
		// Arrange
		render(
			<Provider store={store}>
				<MemoryRouter>
					<Offer id='id1' keywordsArr={[]} />
				</MemoryRouter>
			</Provider>
		)
		// Act
		const emptyButton = screen.getByTestId('empty-star')
		fireEvent.click(emptyButton)
		// Assert
		const outputElement = screen.queryByTestId('empty-star')
		expect(outputElement).toBeNull()
	})

	test('add filled star button when empty button was clicked', () => {
		// Arrange
		render(
			<Provider store={store}>
				<MemoryRouter>
					<Offer id='id1' keywordsArr={[]} />
				</MemoryRouter>
			</Provider>
		)
		// Act
		const button = screen.getByTestId('empty-star')
		fireEvent.click(button)
		// Assert
		const elementOutput = screen.getByTestId('filled-star')
		expect(elementOutput).toBeInTheDocument()
	})

	test('toggle star button ', () => {
		// Arrange
		render(
			<Provider store={store}>
				<MemoryRouter>
					<Offer id='id1' keywordsArr={[]} />
				</MemoryRouter>
			</Provider>
		)
		// Act
		const button = screen.getByTestId('empty-star')
		fireEvent.click(button)

		const button1 = screen.getByTestId('filled-star')
		fireEvent.click(button1)
		// Assert
		const elementOutput = screen.getByTestId('empty-star')
		expect(elementOutput).toBeInTheDocument()
	})

	test('not render keywords list when array is empty', () => {
		render(
			<Provider store={store}>
				<MemoryRouter>
					<Offer id='id1' keywordsArr={[]} />
				</MemoryRouter>
			</Provider>
		)
		// Act
		//...
		// Assert
		const list = screen.queryByRole('list')
		expect(list).toBeNull()
	})

	test('render keyword list when array is not empty', () => {
		render(
			<Provider store={store}>
				<MemoryRouter>
					<Offer id='id1' keywordsArr={['css']} selectedKeywordsArr={[]} />
				</MemoryRouter>
			</Provider>
		)
		// Act
		//...
		// Assert
		const list = screen.getByRole('list')
		expect(list).toBeInTheDocument()
	})
})
