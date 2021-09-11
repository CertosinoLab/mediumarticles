<template>
    <div style="border: 1px solid black;">
        <p>Second Component</p>
        <button v-on:click="emitMyEvent">Emit Event</button>
    </div>
</template>

<script>
    export default {
        methods: {
          emitMyEvent() {
              this.emitter.emit('my-event', {'eventContent': 'String changed'})
          }
        }
    }
</script>

<style scoped>

</style>
