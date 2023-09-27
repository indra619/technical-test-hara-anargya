<script setup></script>

<template>
  <div class="text-lg font-bold">Hallo Folks!</div>
  <Navbar />
  <router-view></router-view>

</template>

<style scoped></style>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>
