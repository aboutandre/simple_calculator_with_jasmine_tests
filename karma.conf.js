module.exports = function (config) {
    config.set({
        frameworks: ['jasmine', 'jasmine-matchers'],
        preprocessors: {
            './js/*.js': ['coverage']
        },
        files: [
            './js/custom-matchers.js',
            './js/*.js',
            './js/*.spec.js'
        ],
        plugins: ['karma-jasmine', 'karma-jasmine-matchers', 'karma-chrome-launcher', 'karma-coverage'],
        reporters: ['dots', 'coverage'],
        browsers: ['ChromeHeadless'],
        color: true,
        coverageReporter: {
            dir: 'coverage/',
            reporter: [{
                type: 'html',
                subdir: 'html'
            }]
        },
        singleRun: true
    });
};