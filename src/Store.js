export default {
  list: [
  ],

  add (title) {
    if (!title) return
    this.list.unshift({
      title: title,
      done: false
    })
  }
}
