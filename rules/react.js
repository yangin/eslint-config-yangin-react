module.exports = {
  plugins: [
    'react'
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [ '.js', '.jsx', '.ts', '.tsx' ]
      }
    },
    react: {
      pragma: 'React',
      version: 'detect' //  FIX: Warning: React version not specified in eslint-plugin-react settings. See https://github.com/yannickcr/eslint-plugin-react#configuration .
    }
  },
  rules: {
    // 强制组件名必须要有displayName
    'react/display-name': [ 'error' ],

    // 强制在iterators/collection 中必须要携带key属性
    'react/jsx-key': [ 'error' ],

    // 标签的子部分内的注释应放在大括号内
    'react/jsx-no-comment-textnodes': [ 'error' ],

    // 禁止重复的属性
    'react/jsx-no-duplicate-props': [ 'error' ],

    // 强制 target="_blank" 属性 必须携带 rel="noreferrer"
    'react/jsx-no-target-blank': [ 'error' ],

    // 禁止在 JSX 中使用未声明的变量
    'react/jsx-no-undef': [ 'error' ],

    // 防止 React 被标记为未使用
    'react/jsx-uses-react': [ 'error' ],

    // 防止 JSX 中使用的变量被标记为未使用
    'react/jsx-uses-vars': [ 'error' ],

    // 禁止children 作为声明属性
    'react/no-children-prop': [ 'error' ],

    // 禁止一个dom元素同时使用 dangerouslySetInnerHTML 与 children
    'react/no-danger-with-children': [ 'error' ],

    // 禁止使用已启用的方法，如componentWillMount、componentWillUpdate 等
    'react/no-deprecated': [ 'error' ],

    // 禁止直接对state进行操作，需通过setState来操作
    'react/no-direct-mutation-state': [ 'error' ],

    // 禁止使用 findDOMNode，推荐用 refs 替代
    'react/no-find-dom-node': [ 'error' ],

    // 禁止使用 isMounted
    'react/no-is-mounted': [ 'error' ],

    // 禁止 ReactDom.render 有返回值
    'react/no-render-return-value': [ 'error' ],

    // 禁止直接采用 ref=字符串 的方式来定义ref, 推荐采用给this添加一个ref的实例来表示
    'react/no-string-refs': [ 'error' ],

    // 禁止未转移的特殊字符，如 < “ ‘ } > 等
    'react/no-unescaped-entities': [ 'error' ],

    // 禁止在Dom标签中存在未知的属性 --fix
    'react/no-unknown-property': [ 'error' ],

    // 禁止不安全的生命周期的使用，如componentWillMount，componentWillReceiveProps，componentWillUpdate
    'react/no-unsafe': [ 'off' ],

    // 禁止被定义的属性未被使用
    'react/no-unused-prop-types': [ 'error' ],

    // 强制react组件必须有属性验证
    'react/prop-types': [ 'error' ],

    // 在使用jsx语法时，必须要声明React作用域
    'react/react-in-jsx-scope': [ 'error' ],

    // 强制render方法必须要有return返回值
    'react/require-render-return': [ 'error' ]
  }
}
