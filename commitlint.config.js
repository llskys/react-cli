/*
 * @Author: your name
 * @Date: 2021-06-08 14:25:11
 * @LastEditTime: 2021-06-08 14:25:42
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \coded:\myWebpack\commitlint.config.js
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  // 检测规则
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
        'revert',
        'build'
      ]
    ],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72]
  }
};
