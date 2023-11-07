module.exports = function () {
  this.options.plugins.push(require.resolve('./nuxt.plugin.js'));
};

module.exports.meta = require('../package.json');
