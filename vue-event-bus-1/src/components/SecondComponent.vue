<template>
    <div style="border: 1px solid red;">
        <p>Sono Second Component</p>
        <button v-on:click="emitter.emit('say-hello', 'Hey, Stranger!')">Emetto evento</button>
    </div>
</template>

<script>
    export default {
        methods: {
          emitMyEvent() {
              console.log("emetto evento");
          }
        }
    }
</script>

<style scoped>

</style>
