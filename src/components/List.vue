<template>
  <ul>
    <li v-for='todo in list'>
      <label v-bind:class="{ done : todo.done }" >
        <input type="checkbox" v-model="todo.done"/>
        {{todo.title}}
      </label>
    </li>
  </ul>

</template>

<script>
import Store from '../Store.js'

export default {
  props: {
    initList: {
      type: Array
    }
  },
  data () {
    return Store
  }
}
</script>

<style scoped>
ul {
  margin-left: 2rem;
  padding: 0;

  .done {
    text-decoration: line-through;
  }
}
</style>
