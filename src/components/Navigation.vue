<template>
    <nav>
      <ul>
        <!--  
            <li>
                <router-link :to="url.name">{{url.name}}</router-link>
            </li> 
        -->
        <li v-for="url in urls" :key="url">
            <router-link :to="{name : url}">{{url}}</router-link>
        </li> 
      </ul>
    </nav>
</template>

<script>
export default {
    name: 'Navigation',
    // props: ["urls"],
    props: {
        urls:  Array,
    },
}
</script>

<style scoped>
nav {
  float: right;
}
nav ul {
  margin: 0;
}
nav ul li {
 list-style-type: none;
 display: inline;
}
nav ul li a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 0 15px;
}
nav ul li a.router-link-exact-active {
    color: hotpink;
}
</style>
