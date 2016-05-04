<template>

  <div id="todo">
    <todo-form username='Lily'></todo-form>
    <todo-list></todo-list>
  </div>

</template>

<script>
import Form from './Form.vue'
import List from './List.vue'

export default {
  components: {
    'todo-form': Form,
    'todo-list': List
  },

  events: {
    add (input) {
      this.$broadcast('add', input)
    }
  }
}

</script>

<style>
</style>
