/**
 * 简单的字符串匹配搜索
 */
function searchStr() {
  let str = 'HELLO world'
  let reg = /llo/
  console.log(str.search(reg)) // 2 返回第一个字母的位置，没有搜索到就返回-1

  // {n}
  let str1 = 'aacaf'
  console.log(str1.search(/a{2}/)) // 必须两个a连在一起，

  console.log(str.search(/llo\b/i))
  let str2 = 'hello,world'
  console.log(str2.search(/ll\b/i)) // -1 ll并不是边界情况的字符
}

// searchStr()

/**
 * 练习
 */
function demo1() {
  let reg = /d(b+)d/g
  let result = reg.exec('cdbbdbsbz')
  console.log(result[0])

}
// demo1()

/**
 * 使用括号的子字符串匹配
 * 使用replace()方法来转换字符串中的单词。在匹配到的替换文本中，脚本使用替代的$ 1,$ 2表示第一个和第二个括号的子字符串匹配。
 */
function demo2() {
  let re = /(\w+)\s(\w+)/ // 匹配单词 空格
  let str = 'hello world'
  let result = str.replace(re,"$1,$2")
  console.log(result)
}

// demo2()

/**
 * 匹配数字
 * 使用 \d 匹配数字
 * 将一下字符串中的数字提取出来
 */
function demo3() {

  let str = '+7(903)-123-45-67'
  let reg = /\d/g
  let result = str.match(reg)
  console.log(result.join(''))

  // 匹配空客字母和数字
  let str1 = 'Is there CSS4?'
  console.log(str1.match(/\s\w+\d/))

}

// demo3()

/**
 *  . 匹配字符。除换行符以外任何字符
 */
function demo4() {
  let str = 'hello world 1 \n 你好，世界'
  console.log(str.match(/./g)) // h
}

demo4()