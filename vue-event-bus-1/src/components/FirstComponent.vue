<script>
export default {
  created (){
    this.emitter.on('say-hello', () => console.log("sono evento!"))
  }
}
</script>

<template>
  <p></p>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
