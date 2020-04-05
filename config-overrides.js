const { replacer, presets } = require('postcss-rename-selector')
const { override, addPostcssPlugins, addLessLoader } = require('customize-cra')

module.exports = override(
  addPostcssPlugins([replacer(presets.antdReplacer)]),
  addLessLoader({
    javascriptEnabled: true,
  })
)
