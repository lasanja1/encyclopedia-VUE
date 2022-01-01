<template>
  <div class="card">
    <img :src="info.image" :alt="`${info.name} info description`" />
    <h6>{{ info.name }}</h6>
    <p v-if="hasAdditionalInfo">{{ info.gender }}</p>
    <p v-if="hasAdditionalInfo">{{ info.status }}</p>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    info: Object,
    hasAdditionalInfo: {
      type: Boolean,
      default: false,
      required: false,
    },
   // charactersPromise: Promise, // or any other constructor
  },

};
</script>

<style scoped>
.card {
  background: white;
  display: inline-block;
  border-radius: 2px;
  border: 0.2rem solid white;
}

.card img {
  width: 100%;
}
h6 {
  line-height: 1.5rem;
}
</style>
