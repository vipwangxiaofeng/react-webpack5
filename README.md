<!--
 * @Author: your name
 * @Date: 2021-01-04 16:13:57
 * @LastEditTime: 2021-01-04 16:50:24
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \react-webpack5-tmplate\README.md
-->
开发环境打包

yarn

yarn build:dev

测试环境打包

yarn

yarn build:test

生产环境打包

yarn

yarn build

外网可访问

yarn add eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-react babel-eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser prettier eslint-plugin-react-hooks


 yarn add husky lint-staged --dev

```
Type(<scope>): <subject>

<body>

<footer>

# Type 字段包含:
#  feat：新功能（feature）
#  fix：修补bug
#  docs：文档（documentation）
#  style： 格式（不影响代码运行的变动）
#  refactor：重构（即不是新增功能，也不是修改bug的代码变动）
#  test：增加测试
#  chore：构建过程或辅助工具的变动
# scope用于说明 commit 影响的范围，比如数据层、控制层、视图层等等。
# subject是 commit 目的的简短描述，不超过50个字符
# Body 部分是对本次 commit 的详细描述，可以分成多行
# Footer用来关闭 Issue或以BREAKING CHANGE开头，后面是对变动的描述、
#  以及变动理由和迁移方法
```
