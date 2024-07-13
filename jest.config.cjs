module.exports = {
	transform: {
		'^.+\\.[t|j]sx?$': 'babel-jest',
	},
	moduleNameMapper: {
		'^.+\\.(jpg|jpeg|png|gif|webp|svg|css)$': 'jest-transform-stub',
	},
	testEnvironment: 'jsdom',
	testPathIgnorePatterns: ['<rootDir>/node_modules/'],
	setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
	testEnvironmentOptions: {
		url: 'https://test.com/',
	},
}
