<template>
  <div>
    <!-- <MainLayout>  -->

   <SearchInput /> 
    <ul v-if="characters">
      <li v-for="character in characters" :key="character.id">
        <router-link
          :to="{
            name: 'CharacterDetails',
            params: {
              id: character.id,
              image: character.image,
              name: character.name,
              gender: character.gender,
              species: character.species,
              status: character.status,
            },
          }"
        >
          <Card :info="character" />
        </router-link>
      </li>
    </ul>
  </div>
  <!-- </MainLayout>  -->
</template>

<script>
import MainLayout from "@/components/MainLayout.vue";
import Card from "@/components/Card.vue";
import SearchInput from "@/components/SearchInput.vue";
import axios from "axios";

export default {
  name: "Home",
  components: { MainLayout, Card, SearchInput },
  data() {
    return {
      characters: null,
    };
  },
  mounted() {
    axios.get("https://rickandmortyapi.com/api/character").then((res) => {
      //?name=rick&status=alive
      if (res.data && res.data.results) {
        this.characters = res.data.results;
      }
    });
  },
};
</script>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
}
li {
  list-style-type: none;
  max-width: 200px;
}
a {
  display: block;
  width: 90%;
  margin-bottom: 1rem;
  color: #2c3e50;
}
a:hover {
  outline: 0.3rem solid hotpink;
}
</style>
