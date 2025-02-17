module.exports = {
    testRegex: 'resources/js/.*.spec.js$',
    moduleFileExtensions: [
        'js',
        'json',
        'vue',
    ],
    transform: {
        "^[^.]+.vue$": "vue-jest",
      "^.+\\.js$": "babel-jest"
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/resources/$1',
        '^~/(.*)$': '<rootDir>/resources/js/$1',
    },
};