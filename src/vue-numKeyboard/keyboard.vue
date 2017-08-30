<template>
  <div :class="['keyboard', { hidden: !show}]">
    <table v-touch:tap="typing" v-touch:long="longTab">
      <tbody>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td data-code='D' rowspan="2"><numkeyboard-icon name='del' /></td>
        </tr>
        <tr>
          <td>4</td>
          <td>5</td>
          <td>6</td>
        </tr>
        <tr>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td data-code='K' rowspan="2" :class="{active: activeOk}">{{ okText || 'OK' }}</td>
        </tr>
        <tr>
          <td>{{ point ? '.' : '' }}</td>
          <td>0</td>
          <td data-code='F'><numkeyboard-icon name="keyfold" /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { closest } from 'libs/utils'

export default {

  name: 'keyboard',

  props: ['show', 'point', 'activeOk', 'okText'],

  methods: {
    typing (e) {
      e.preventDefault()

      const td = closest(e.target, 'td')

      if (!td) return

      const code = td.dataset.code || td.textContent

      if (!code) return

      this.$emit('typing', code)
    },

    longTab (e) {
      e.preventDefault()

      const td = closest(e.target, 'td')

      if (!td) return

      let code = td.dataset.code || td.textContent

      if (!code) return

      if (code === 'D') {
        code = 'LD'
      }

      this.$emit('typing', code)
    }
  }
};
</script>
