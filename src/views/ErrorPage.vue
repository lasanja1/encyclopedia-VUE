<template>
  <div class="error">
    <div class="wrapper">
      <h2>Error Page</h2>
      <p>Go back <router-link :to="{name : 'Home'}">Home</router-link></p>
    </div>
  </div>
</template>

<style scoped>
.error {
  display: flex;
}
.wrapper {
  margin: auto;
}
p {
  margin: 2rem auto;
}
a {
  color: hotpink;
  text-decoration: none;
  font-weight: bold;
}
</style>
