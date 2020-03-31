
module.exports = {
    setupFilesAfterEnv: ['<rootDir>/testConfig.ts'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    moduleDirectories: ['node_modules', 'src'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    globals: {
        'ts-jest': {
            tsConfigFile: 'tsconfig.json'
        }
    },
    rootDir: '.',
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
    // testRegex: 'src/ElementBlock/__test__/Block.spec.ts',
    verbose: true
};
