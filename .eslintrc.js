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
        "no-await-in-loop": 0,
        "no-plusplus": "off",
        "no-param-reassign": [2, {"props": false}],
        "no-unused-expressions": ["error", {"allowTernary": true}],
        "import/prefer-default-export": "off",
        "no-console": "off",
        "import/no-extraneous-dependencies": ["error", { devDependencies: true, }],
        "consistent-return": ["error", { "treatUndefinedAsUnspecified": true }],
        "no-restricted-globals": ["error", "event", "fdescribe"]
    }
};