# vue-numkeyboard

> vue number keyboard for mobile

![](https://github.com/brucejcw/vue-numkeyboard/blob/master/snapshot.png)

## Install
npm install vue-numkeyboard

## Usage
```
import numkeyboard from 'vue-numkeyboard';
import 'vue-numkeyboard/style.css';

Vue.use(numkeyboard);

<numkeyboard v-model="num" :expose-elem="exposeElem" :point="point"></numkeyboard>
```

## Props
|attribute|type|default|desc|
|:----:|:----:|:----:|:---:|
|expose-elem|String, Optional|current input element|raise page height if expose elemenet is covered by keyboard|
|point|Boolean, Optional|true|show digital point|