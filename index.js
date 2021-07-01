module.exports = {
  extends: [
    '@yangin/eslint-config-yangin-base',
    './rules/react',
    './rules/react-hook'
  ].map(require.resolve),
  rules: {}
}
