<template>
  <TheHeader />
    <Home />
  <TheFooter />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TheHeader from './components/shared/TheHeader.vue';
import TheFooter from './components/shared/TheFooter.vue';
import Home from './views/Home.vue';

export default defineComponent({
  components: {
    TheHeader,
    TheFooter,
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
