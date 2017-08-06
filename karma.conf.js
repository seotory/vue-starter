var webpackConfig = require('./webpack.config');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai', 'sinon'],
    files: [
      'test/**/*.ts'
    ],
    exclude: [
    ],
    preprocessors: {
      'test/**/*.ts': ['webpack']
    },
    webpack: {
      module: webpackConfig.module,
      resolve: webpackConfig.resolve
    },
    // webpack: require("./webpack.config.js"),
    webpackMiddleware: {
      // webpack으로 부터 발생하는 로그 차단
      noInfo: true,
      stats: 'errors-only'
    },
    mime: { 'text/x-typescript': ['ts','tsx'] },
    reporters: ['spec', 'coverage'],

    coverageReporter: {
      dir: 'dist/coverage/',
      reporters: [
          { type: 'html' },
          { type: 'text' },
          { type: 'text-summary' }
      ]
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  })
}
