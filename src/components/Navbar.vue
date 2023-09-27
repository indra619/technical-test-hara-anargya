<template>
  <div class="navbar">
    <nav>
    <h1 class="navbar-title">Hey Links.</h1>
      <ul>
        <li><router-link to="/">Dashboard</router-link></li>
        <li><router-link to="/overview">Overview</router-link></li>
        <!-- Add more navigation links here -->
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  // Add any component-specific logic here
};
</script>

<style scoped>
/* Add your CSS styles for the navbar here */
.navbar {
  background-color: #333;
  color: white;
}

.navbar nav ul {
  list-style: none;
  padding: 0;
  display: flex;
}

.navbar nav ul li {
  margin-right: 20px;
}

.navbar nav ul li a {
  text-decoration: none;
  color: white;
}
</style>
