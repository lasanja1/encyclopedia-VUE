<template>
  <header id="navContainer">
    <router-link :to="{name: 'Home'}"><h1>Rick & Morty Encyclopedia</h1></router-link>
    
    <Navigation :urls="urls" />
  </header>
  <router-view />
  <Footer />
</template>

<script>
import Footer from "@/components/Footer.vue";
import Navigation from "@/components/Navigation.vue";

export default {
  components: { Footer, Navigation },
  data() {
    return {
      urls: ["Home", "About"],
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
:root {
  font-size: calc(0.5em + 1vw);
  background: lightgrey;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 70%;
  max-width: 1200px;
  margin: 0 auto;
}

#navContainer {
  padding: 1.5rem 0;
  background: lightgrey;
  overflow: hidden;
}

h1 {
  font-size: 1rem;
  float: left;
  margin: 0;
  color: #2c3e50;
}
button, a {
  cursor: pointer;
}
</style>
