<template>
    <div class="dialog-content">
          <span class="close" @click="closeDialog">&times;</span>
          <h2>User Details</h2>
          <p><strong>Name:</strong> {{ selectedUser.name }}</p>
          <p><strong>Email:</strong> {{ selectedUser.email }}</p>
          <p><strong>Job:</strong> {{ selectedUser.email }}</p>
          <p><strong>Country:</strong> {{ selectedUser.email }}</p>
            <slot></slot>
    </div>
    <button @click="closeDialog">Close</button>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false, // Initially, the dialog is hidden
    };
  },
  methods: {
    openDialog() {
      this.isVisible = true;
    },
    closeDialog() {
      this.isVisible = false;
    },
  },
};
</script>

<style scoped>
/* Add CSS styles for your dialog here */
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Adjust the z-index as needed */
}

.dialog-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
}

/* Customize dialog styles as needed */
</style>