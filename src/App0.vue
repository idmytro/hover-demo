<template>
  <div id="app">
    <div class="space-y-1px">
      <button
        class="h-3rem w-full transition-colors"
        :class="status1.cls"
        @mouseover="hover1"
        @mousedown="press1"
        @click="click1"
        @mouseleave="leave1"
      >js mouseover | {{ status1.label }}</button>

      <button
        class="h-3rem w-full transition-colors"
        :class="[
          statuses.initial.cls,
          status2.clicked ? statuses.clicked.cls : '',
          'hover:bg-yellow-300',
          'active:bg-red-300',
        ]"
        @click="click2"
        @mouseleave="leave2"
      >css :hover | {{ status2.label }}</button>
      <button
        class="h-3rem w-full transition-colors"
        :class="[
          statuses.initial.cls,
          status2.clicked ? statuses.clicked.cls : '',
          'can-hover:hover:bg-yellow-300',
          'active:bg-red-300',
        ]"
        @click="click3"
        @mouseleave="leave3"
      >@media (hover: hover) | {{ status3.label }}</button>
    </div>

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
  margin-top: 60px;
}
</style>
