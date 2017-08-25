# vue-numkeyboard

> vue number keyboard for mobile

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]

![](https://github.com/brucejcw/vue-numkeyboard/blob/master/snapshot.png)

## Install
npm install vue-numkeyboard

## Usage
```
import numkeyboard from 'vue-numkeyboard';
import 'vue-numkeyboard/style.css';

Vue.use(numkeyboard);

<numkeyboard v-model="num" ok-text="OK" text-align="left"></numkeyboard>
```

## Props
|attribute|type|default|required|desc|
|:----:|:----:|:----:|:---:|:---:|
|expose-elem|String|current input element|false|raise page height if expose elemenet is covered by keyboard|
|point|Boolean|true|false|show digital point|
|ok-text|String|OK|false|ok button text|
|text-align|String|''|false|start inputing from left or right|
|placeholder|String|''|false|placeholder|

[![MIT Licence][licence-image]][licence-url]

[npm-image]: http://img.shields.io/npm/v/vue-numkeyboard.svg
[npm-url]: http://npmjs.org/package/vue-numkeyboard
[travis-image]: https://img.shields.io/travis/brucejcw/vue-numkeyboard.svg
[travis-url]: https://travis-ci.org/brucejcw/vue-numkeyboard
[coveralls-image]: https://img.shields.io/coveralls/brucejcw/vue-numkeyboard.svg
[coveralls-url]: https://coveralls.io/github/brucejcw/vue-numkeyboard?branch=master
[licence-image]: https://img.shields.io/github/license/mashape/apistatus.svg
[licence-url]: https://opensource.org/licenses/mit-license.php
