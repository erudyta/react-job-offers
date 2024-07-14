import Header from '../Components/Modal/Modal.jsx'
import { Provider } from 'react-redux'
import { setupStore } from '../store/index.js'

import { render, screen, fireEvent } from '@testing-library/react'
import { expect } from '@jest/globals'
import { MemoryRouter } from 'react-router-dom'

describe('Header component', () => {
	let store
	beforeEach(() => {
		store = setupStore({})
	})

	test('should open modal', () => {
		// Arrange
		render(
			<Provider store={store}>
					<Header />
			</Provider>,
            document.getElementById('root')  
		);
		// Act
		const button = screen.getByRole('button')
		//fireEvent.click(button)
		// Assert
		const output = screen.getByRole('dialog')
		expect(output).toBeInTheDocument()
	})
})
