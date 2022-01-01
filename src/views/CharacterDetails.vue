<template>
  <div class="characterDetails">
    <Button :action="back" title="&larr; Back" />
    <!-- <button @click="redirect">&larr; Home</button> -->

    <!-- <p>The character is {{ $route.params.id }}</p> -->
    <!-- $route contains information about current route,including route params. NOT TO BE CONFUSED with routeR object -->
    <!-- get the params and then the whatever router param last is called, in our case = id from here
    {
    path: '/:id', 
    name: 'CharacterDetails',
    component: CharacterDetails
    },

    YOU CAN ALSO ACCESS {{ $route.params.id }} FROM DATA() {} OBJECT BELOW,best practice
    -->
    <Card :info="details" :hasAdditionalInfo="true" />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Button from "@/components/Button.vue";

export default {
  components: { Card, Button },
  //
  //props: ['id', 'name', 'description', 'img'],
  //
  // if we use props like above we dont need to use the data() below, because it passes all params as props you define above here,
  // BUT in this case we need to pass it to another component
  // so thats why we create them as object first and pass them on to Card
  //
  data() {
    return {
      details: {
        name: this.$route.params.name,
        id: this.$route.params.id,
        image: this.$route.params.image,
        gender: this.$route.params.gender,
        status: this.$route.params.status,
      },
    };
  },
  methods: {
    back: function () {
      // we are using routeR not route
      // going X steps back (or forward if no minus present)
      this.$router.go(-1);
    },
    redirect: function () {
      // we are using routeR not route
      // redirecting
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped>
button {
  float: left;
}
</style>

