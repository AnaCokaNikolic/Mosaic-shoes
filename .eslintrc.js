module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "airbnb-base",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "func-names": 0,
        "linebreak-style": 0,
        "object-curly-spacing": 0,
        "indent": 0,
        "quotes": ["error", "backtick"],
        "arrow-body-style": ["error", "always"],
        "no-restricted-syntax": 0,
        "no-underscore-dangle": 0,
        "no-await-in-loop": 0
    }
};