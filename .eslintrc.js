module.exports = {
  parser: 'babel-eslint',
  plugins: ['prettier'],
  extends: 'airbnb',
  // 环境定义了预定义的全局变量。
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true
  },
  /**
   *  "off" 或 0 - 关闭规则
   *  "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出),
   *  "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
   */
  rules: {
    'semi': [0],
    'react/jsx-filename-extension': [1, {extensions: ['.js']}] // 限制文件后缀
  }
}
