/*
 * @Author: your name
 * @Date: 2020-12-31 15:40:31
 * @LastEditTime: 2021-01-04 16:41:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-webpack5-tmplate\config\utils.js
 */

const { readdirSync } = require('fs')

module.exports = {
  isEmptyDir: function (dirnane) {
    try {
      const dirents = readdirSync(dirnane, {
        withFileTypes: true,
      })
      if (dirents.length > 0) {
        return false
      }
      return true
    } catch (err) {
      return true
    }
  },
}
