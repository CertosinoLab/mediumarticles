<template>
  <div id="app" style="display: flex; justify-content: center;">
    <div style="max-width: 500px;">
      <vnt-checkbox v-model="isChecked"></vnt-checkbox>
      <vnt-button>Button</vnt-button>
      <vnt-pivot>
        <vnt-pivot-item label="Item 1" active>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </vnt-pivot-item>
        <vnt-pivot-item label="Item 2">
          <p>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
        </vnt-pivot-item>
        <vnt-pivot-item label="Item 3">
          <p>remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
        </vnt-pivot-item>
      </vnt-pivot>
    </div>
  </div>
</template>

<script>
import Hello from './components/Hello';
export default {
  name: 'app',
  data: function () {
    return {
      isChecked: false
    }
  },
  components: {
    Hello,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
