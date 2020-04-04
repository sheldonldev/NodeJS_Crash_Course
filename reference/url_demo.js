const url = require('url')

const my_url = new URL('https://search.yahoo.com/search?ei=UTF-8&fr=crmas&p=how+to+insall+node.js');

console.log(my_url.href)
console.log(my_url.toString())

console.log(my_url.host)
console.log(my_url.hostname)  // does not get port

console.log(my_url.pathname)

console.log(my_url.search)
console.log(my_url.searchParams)

my_url.searchParams.append('abc', '123')
console.log(my_url.searchParams)

my_url.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))
