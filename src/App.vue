<template>
  <div id="app">
    <button
      class="h-3rem w-20rem transition-colors"
      :class="status1.cls"
      @mouseover="hover1"
      @mousedown="press1"
      @click="click1"
      @mouseleave="leave1"
    >{{ status1.label }}</button>

    <button
      class="h-3rem w-20rem transition-colors"
      :class="[
        statuses.initial.cls,
        status2.clicked ? statuses.clicked.cls : '',
        'hover:bg-yellow-300',
        'active:bg-red-300',
      ]"
      @click="click2"
    >{{ status2.label }}</button>
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
  clicked: { cls: 'bg-blue-300', label: 'CLICKED', clicked: true },
};

export default {
  name: 'App',
  data () {
    return {
      statuses,
      status1: { ...statuses.initial },
      status2: { ...statuses.initial },
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
