# Node.js Crash Course

[Video](https://www.youtube.com/watch?v=fBNz5xF-Kx4&list=PLillGF-RfqbZ2ybcoD2OaabW2P7Ws8CWu)

- js running time on server

## install node.js

```bash
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt install nodejs
node --version
npm --version

node   # run node
# ctl + c
```

## new node.js projects and install packages

```bash
mkdir nodejs_crash_course
cd nodejs_crash_course

npm init
# a json file is created, can run `npm install` like python requirements

npm install uuid
npm install -D nodemon    # developement version
```

- `pacakge.json` is created, change scripts settings for later (run server automatically every time file saved)

```json
{
  "name": "nodejs_crash_course",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {               // change here
    "start": "node index",
    "dev": "nodemon index"
  },
  "author": "sheldon",
  "license": "ISC",
  "dependencies": {
    "uuid": "^7.0.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.2"
  }
}

```

```bash
npm run dev
```

- TEST main entry:

```bash
touch index.js
vim index.js
```

```js
console.log('hello')
```

```bash
node index
```

- TEST modules:

```bash
touch person.js
vim person.js
```

```js
// Module wrapper function
(function (exports, require, module, __filename, __dirname) {

})

// console.log(__dirname, __filename)

class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`Hello, I am ${this.name} and I am ${this.age}.`);
    }
}

module.exports = Person;
```

```bash
vim index.js
```

```js
const Person = require('./person')

const person1 = new Person('John Doe', 30)

person1.greeting()
```

```bash
node index
```

## Demos - path, fs, os, url, http

```bash
mkdir reference
cd reference   # see demos there
```

## Logger

```bash
cd <basedir>
touch logger.js
vim logger.js  # logger.js
vim index.js   # index.js
```

## Http Server Example

```bash
cd <basedir>
mkdir public
touch public/index.html  # index.html
touch public/about.html  # about.html
touch public/404.html    # 404.html
```

```bash
vim index.js  # index.js
```

## Deploy to heroku

- [Install Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install). Install git.

```bash
heroku --version
git --version
```

- new `.gitignore`

```txt
node_modules
reference
logger.js
person.js
```

- push to heroku

```bash
git init
git add .
git commit -m 'init'
heroku create
```

- goto heroku dashboard, click `deploy`, grab CLI of `Initialize a git repository in a new or existing directory`

```bash
heroku git:remote -a radiant-shore-*****
git push heroku master
heroku open
```


