const path = require('path');

module.exports = {
    verbose: true,
    projects: [
        {
            runner: 'jest-runner-eslint',
            displayName: 'lint',
            testMatch: ['<rootDir>/**/*.js']
        },
        {
            displayName: 'test',
            snapshotSerializers: [
                'enzyme-to-json/serializer',
                'jest-aphrodite-react'
            ],
            setupFiles: [path.join(__dirname, 'jest.setup.js')]
        }
    ]
};
