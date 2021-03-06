/**
 * @file prettier
 * @author Cuttle Cong
 * @date 2018/4/15
 * @description
 */
const prettier = require('prettier')


module.exports = function(text, opt) {
  return prettier.format(text, {
    parser: 'typescript',
    ...opt
  })
}
