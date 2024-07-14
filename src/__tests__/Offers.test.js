import Offers from '../Components/Pages/Offers.jsx'

import { Provider } from 'react-redux'
import store from '../store/index.js'

import { expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'

describe('Offer component', () => {
	// Arrange
	test('render h1 if wrong data props were passed', () => {
		render(
			<Provider store={store}>
				<Offers offer=''></Offers>
			</Provider>
		)
		// Act
		//...
		// Assert
		const outputElement = screen.getByText('No offers matching the', { exact: false })
		expect(outputElement).toBeInTheDocument()
	})

	test('does not render h1 when correct data is passed', () => {
		// Arrange
		render(
			<Provider store={store}>
				<Offers offer='javascript'></Offers>
			</Provider>
		)
		// Act
		//...
		// Assert
		const element = screen.queryByText('No offers matching the', { exact: false })
		expect(element).toBeNull
	})
})
