const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href)
console.log(myUrl.toString())

// Host (root domain)

console.log(myUrl.host);

console.log(myUrl.hostname);

// path name

console.log(myUrl.pathname)


// serialized query

console.log(myUrl.search);

// Params OBJECT

console.log(myUrl.searchParams)

myUrl.searchParams.append('abcs', '123');

console.log(myUrl.searchParams)

myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));