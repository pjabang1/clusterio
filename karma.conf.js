module.exports = function(config) {
  config.set({
    browsers: [],
    frameworks: ['jasmine'],
    files: [
      'dist/js/*.min.js',
      'test/**/*.spec.js'
    ]
  });
};