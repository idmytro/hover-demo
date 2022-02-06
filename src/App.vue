<template>
  <div id="app">
    <h1 class="mt-2rem mb-1rem">1. Default behavior</h1>
    <div class="flex gap-10px justify-center">
      <button class="w-2/5 h-3rem select-none rounded bg-green-300 active:bg-blue-300 hover:bg-yellow-300">Button</button>
      <button class="w-2/5 h-3rem select-none rounded bg-green-300 active:bg-blue-300 hover:bg-yellow-300">Button</button>
    </div>
    <h1 class="mt-2rem mb-1rem">2. Disabled hover on mobile</h1>
    <div class="flex gap-10px justify-center">
      <button class="w-2/5 h-3rem select-none rounded bg-green-300 active:bg-blue-300 can-hover:hover:bg-yellow-300">Button</button>
      <button class="w-2/5 h-3rem select-none rounded bg-green-300 active:bg-blue-300 can-hover:hover:bg-yellow-300">Button</button>
    </div>
  </div>
</template>

<script>
const statuses = {
  initial: { cls: 'bg-green-300', label: 'HOVER OR CLICK ME' },
  hovered: { cls: 'bg-yellow-300', label: 'HOVERED' },
  pressed: { cls: 'bg-red-300', label: 'PRESSED' },
  clicked: { cls: 'bg-blue-300', label: 'CLICKED', clicked: true },
};

export default {
  name: 'App',
  data () {
    return {
      statuses,
      status1: { ...statuses.initial },
      status2: { ...statuses.initial },
      status3: { ...statuses.initial },
    };
  },
  methods: {
    press1 () {
      this.status1 = { ...statuses.pressed };
    },
    click1 () {
      this.status1 = { ...statuses.clicked };
    },
    hover1 () {
      this.status1 = { ...statuses.hovered };
    },
    leave1 () {
      this.status1 = { ...statuses.initial };
    },

    click2 () {
      this.status2 = { ...statuses.clicked };
    },
    leave2 () {
      this.status2 = { ...statuses.initial };
    },

    click3 () {
      this.status3 = { ...statuses.clicked };
    },
    leave3 () {
      this.status3 = { ...statuses.initial };
    },
  },
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
