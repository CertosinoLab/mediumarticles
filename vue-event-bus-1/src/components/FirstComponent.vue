<script>
export default {
  data: function () {
    return {
      testEvent: 'String to change'
    }
  },
  created (){
    this.emitter.on('my-event', (evt) => {
      this.testEvent = evt.eventContent;
    })
  }
}
</script>

<template>
  <div style="border: 1px solid black;">
    <h1>First Component</h1>
    <p>{{testEvent}}</p>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
