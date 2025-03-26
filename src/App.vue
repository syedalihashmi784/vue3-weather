<template>
  <div class="app-container">
    <nav class="navbar">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About Us</router-link>
      <router-link to="/services">Our Services</router-link>
      <router-link to="/customers">Our Customers</router-link>
    </nav>
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
.navbar {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background-color: #0d9488;
  color: white;
  justify-content: center;
}

.navbar a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.navbar a.router-link-exact-active {
  border-bottom: 2px solid white;
}

.main-content {
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
  text-align: center;
}

body {
  margin: 0;
  background-color: #f1f5f9;
  color: #111827;
}
</style>
