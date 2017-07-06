<template>
  <div id="app">
    <numkeyboard v-model="num"></numkeyboard>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      num: '0'
    }
  },

  watch: {
    num (val, oVal) {
      // value logic here
      if (String(val).indexOf('0') === 0) {
        this.num = parseFloat(val)
      }
    }
  }
}
</script>

<style>
html, body {
  height: 100%;
}

#app {
  padding-top: 1000px;
}

.numKeyboardInput {
  border: 1px solid #ccc;
}
</style>