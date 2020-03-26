module.exports = {
    setupFilesAfterEnv: ['<rootDir>/testConfig.ts'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    moduleNameMapper: {
        '\\.(scss|css)$': 'identity-obj-proxy',
        '^lodash-es$': '<rootDir>/node_modules/lodash/index.js'
    },
    moduleDirectories: ['node_modules', 'src'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    globals: {
        'ts-jest': {
            tsConfigFile: 'tsconfig-test.json'
        }
    },
    rootDir: '.',
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
    // testRegex: 'src/ElementBlock/__test__/Block.spec.ts',
    verbose: true
};
