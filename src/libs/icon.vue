<template>
  <span :class="['icon', 'icon-' + name]">
    <svgicon :icon="name"></svgicon>
  </span>
</template>

<script>
  import '../compiled-icons'
  export default {
    props: ['name']
  }
</script>
