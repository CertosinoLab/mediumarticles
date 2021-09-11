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
    <p>First Component</p>
    <p>{{testEvent}}</p>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
