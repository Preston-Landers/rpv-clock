// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

var moment = require('moment')

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    const now_fmt = moment().format('YYYY-MM-DD')

    browser
      .url(devServer)
      .waitForElementVisible('#clock-app', 5000)
      .assert.elementPresent('.main-panel')
      .assert.containsText('h1', now_fmt)
      .assert.elementCount('img', 1)
      .end()
  }
}
