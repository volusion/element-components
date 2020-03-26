// const path = require('path');

// module.exports = {
//     verbose: true,
//     projects: [
//         {
//             runner: 'jest-runner-eslint',
//             displayName: 'lint',
//             testMatch: ['<rootDir>/**/*.js']
//         },
//         {
//             displayName: 'test',
//             snapshotSerializers: [
//                 'enzyme-to-json/serializer',
//                 'jest-aphrodite-react'
//             ],
//             setupFiles: [path.join(__dirname, 'jest.setup.ts')]
//         }
//     ]
// };

module.exports = {
    setupTestFrameworkScriptFile: '<rootDir>/testConfig.ts',
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
    testRegex: '**/__tests__/**/*.(js|js)?(x),**/?(*.)+(spec|test).(js|ts)?(x)',
    verbose: true
};
