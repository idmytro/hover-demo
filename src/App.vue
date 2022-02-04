<template>
  <div id="app">
    <button
      class="h-3rem w-20rem transition-colors"
      :class="status.cls"
      @mouseover="hover"
      @mousedown="press"
      @click="click"
      @mouseleave="leave"
    >{{ status.label }}</button>
    <section class="mt-2rem">
      <h1 class="font-bold">LEGEND:</h1>
      <ul>
        <li class="h-2rem p-20px inline-flex justify-center items-center" :class="statuses.initial.cls">initial</li>
        <li class="h-2rem p-20px inline-flex justify-center items-center" :class="statuses.hovered.cls">hovered</li>
        <li class="h-2rem p-20px inline-flex justify-center items-center" :class="statuses.pressed.cls">pressed</li>
        <li class="h-2rem p-20px inline-flex justify-center items-center" :class="statuses.clicked.cls">clicked</li>
      </ul>
    </section>
  </div>
</template>

<script>
const statuses = {
  initial: { cls: 'bg-green-300', label: 'HOVER OR CLICK ME' },
  hovered: { cls: 'bg-yellow-300', label: 'HOVERED' },
  pressed: { cls: 'bg-red-300', label: 'PRESSED' },
  clicked: { cls: 'bg-blue-300', label: 'CLICKED' },
};

export default {
  name: 'App',
  data () {
    return {
      statuses,
      status: { ...statuses.initial },
    };
  },
  methods: {
    press () {
      this.status = { ...statuses.pressed };
    },
    click () {
      this.status = { ...statuses.clicked };
    },
    hover () {
      this.status = { ...statuses.hovered };
    },
    leave () {
      this.status = { ...statuses.initial };
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
  margin-top: 60px;
}
</style>
