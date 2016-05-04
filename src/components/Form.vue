<template>
  <h1>{{username}}'s Todo List</h1>
    <form v-on:submit="add" v-on:submit.prevent>
    <input type="text" v-model="input"/>
    <input type="submit" value='add' />
  </form>
</template>

<script>
import Store from '../Store.js'

export default {
  props: {
    username: {
      type: String,
      default: 'Unnamed'
    }
  },

  data () {
    return {
      input: ''
    }
  },

  methods: {
    add () {
      Store.add(this.input)
      this.input = ''
    }
  }
}
</script>
