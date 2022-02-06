<template>
  <div id="app" class="select-none">
    <h1 class="mt-2rem mb-1rem">1. Default behavior</h1>
    <div class="flex gap-10px justify-center">
      <button class="w-2/5 h-3rem rounded bg-green-300 !active:bg-blue-300 hover:bg-yellow-300">Button</button>
      <button class="w-2/5 h-3rem rounded bg-green-300 !active:bg-blue-300 hover:bg-yellow-300">Button</button>
    </div>
    <h1 class="mt-2rem mb-1rem">2. Disabled hover on mobile</h1>
    <div class="flex gap-10px justify-center">
      <button class="w-2/5 h-3rem rounded bg-green-300 !active:bg-blue-300 can-hover:hover:bg-yellow-300">Button</button>
      <button class="w-2/5 h-3rem rounded bg-green-300 !active:bg-blue-300 can-hover:hover:bg-yellow-300">Button</button>
    </div>
    <h1 class="mt-2rem mb-1rem">Legend:</h1>
    <div class="flex justify-center">
      <p class="w-25% p-2 bg-green-300">Initial</p>
      <p class="w-25% p-2 bg-yellow-300">Hovered</p>
      <p class="w-25% p-2 bg-blue-300">Pressed</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
