<template>
    <button @click="action"
     value="post"
    type="submit">{{ title }}</button>
</template>

<script>
export default {
    props: {
      title: String,
      action: {
        type: Function,
        required: false,
      }
    }
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