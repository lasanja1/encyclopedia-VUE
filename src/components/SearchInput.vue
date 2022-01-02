<template>
  <form action="submit" @submit.prevent="handleSearch">
    <input v-model="userInput"
        :placeholder="placeholder" type="" />
    <Button title="Search" />
  </form> 
</template>

<script>
import Button from "@/components/Button.vue";
export default {
  components: { Button },
  data() {
    return {
      userInput: '',
      placeholder: 'Type keyword...'
    }
  },
  methods: {
    // handleUserInput: function () {
    //   console.log('handleUserInput')
    // },
    handleSearch: function() {
      console.log('handleSearch', this.userInput)
    }
  }
};
</script>


<style scoped>
input {
  border: none;
  padding: 10px 15px;
  outline: none;
}

</style>