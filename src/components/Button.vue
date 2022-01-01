<template>
    <button @click="action">{{ title }}</button>
</template>

<script>
export default {
    props: ['title', 'action']
}
</script>

<style scoped>
button {
  background: hotpink;
  padding: 10px 15px;
  color: white;
  border: none;
}
</style>