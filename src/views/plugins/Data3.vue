<!-- ViewPlugin1.vue -->
<template>
  <div class="view-plugin">
    <p>Rejected: {{ data }}</p>
  </div>
</template>

<script>
export default {
  props: {
    data: String,
  },
};
</script>

<style scoped>
/* Add your CSS styles for ViewPlugin1 here */
.view-plugin {
  background-color: #f2f2f2;
  padding: 10px;
}
</style>
