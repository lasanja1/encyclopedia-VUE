<template>
  <div class="about">
    <h2>About</h2>
    <p>The Rick and Morty Encyclopedia is made for fun and learning purposes. <br><br>It's a single page application that helps you search throught the vast encyclopedia of the series' characters. <br><br>Type anything in the <router-link :to="{name : 'Home'}">Search</router-link> bar and see what you get.</p>
  </div>
</template>

<style scoped>
p {
  width: 100%;
  max-width: 550px;
  margin: 2rem auto;
  text-align: left;
}
a {
  color: hotpink;
  font-weight: bold;
  text-decoration: none;
}
</style>
