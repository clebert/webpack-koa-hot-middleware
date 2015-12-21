# webpack-koa-hot-middleware

[![Build Status](https://travis-ci.org/clebert/webpack-koa-hot-middleware.svg?branch=master)](https://travis-ci.org/clebert/webpack-koa-hot-middleware)
[![NPM Version](https://badge.fury.io/js/webpack-koa-hot-middleware.svg)](https://badge.fury.io/js/webpack-koa-hot-middleware)

> A [Koa](http://koajs.com/) wrapper for [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## Installation

```sh
npm install webpack-koa-hot-middleware
```

## Usage

For more information, see [here](https://github.com/glenjamin/webpack-hot-middleware/blob/master/README.md).

```js
const createHotMiddleware = require('webpack-koa-hot-middleware')

// ...

app.use(createHotMiddleware(compiler))
```
