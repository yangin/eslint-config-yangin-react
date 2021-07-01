module.exports = {
  plugins: [
    'react-hooks'
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },

  rules: {
    // 【强制】确保符合hooks的规则
    'react-hooks/rules-of-hooks': 'error',

    // 验证像 useEffect 和类似的 Hook 的依赖项列表
    'react-hooks/exhaustive-deps': 'error'
  }
}
