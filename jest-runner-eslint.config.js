const path = require('path');

module.exports = {
    cliOptions: {
        config: path.join(__dirname, './.eslintrc.json'),
        fix: true
    }
};
