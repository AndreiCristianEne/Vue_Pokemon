<template>
  <b-row class="text-center justify-content-md-center p-4">
    <b-jumbotron border-variant="dark">
      <template v-slot:header>Pokemon Characters</template>

      <template
        v-slot:lead
      >You can select a Pokemon and the quirks that they possess will then be displayed.</template>

      <hr class="my-4" />

      <b-row fluid>
        <b-col @click="onSelect('charmander')">
          <imageComponent :name="`Charmander`" />
        </b-col>
        <b-col @click="onSelect('pikachu')">
          <imageComponent :name="`Pikachu`" />
        </b-col>
        <b-col @click="onSelect('ditto')">
          <imageComponent :name="`Ditto`" />
        </b-col>
      </b-row>

      <hr class="my-4" />

      <!-- Conditional rendering: only if the abilities array is not emtpy -->
      <div v-if="selectedPokemonAbilities.length != 0" class="text-center">
        <div id="nameElement">
          <b>{{selectedPokemon}}</b>
        </div>
        <div id="abilityElement" v-for="(ability, index) in selectedPokemonAbilities" :key="index">
          {{ability}}
          <br />
        </div>
      </div>
    </b-jumbotron>
  </b-row>
</template>

<script>
import axios from "axios";
import imageComponent from "./components/imageComponent";

export default {
  name: "App",
  components: {
    imageComponent
  },
  data() {
    return {
      selectedPokemon: "",
      selectedPokemonAbilities: [],
      characters: []
    };
  },
  created() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/ditto/")
      .then(response => {
        this.characters.push(response.data);
      })
      .catch(error => console.log("API error: ", error));
    axios
      .get("https://pokeapi.co/api/v2/pokemon/pikachu/")
      .then(response => {
        this.characters.push(response.data);
      })
      .catch(error => console.log("API error: ", error));
    axios
      .get("https://pokeapi.co/api/v2/pokemon/charmander/")
      .then(response => {
        this.characters.push(response.data);
      })
      .catch(error => console.log("API error: ", error));
  },
  methods: {
    onSelect(pokemon) {
      // make the first letter capitalized
      this.selectedPokemon = pokemon[0].toUpperCase() + pokemon.slice(1);
      // look for the specific pokemon
      this.characters.map(character => {
        if (character.name == pokemon) {
          // empty the abilities array
          this.selectedPokemonAbilities.splice(
            0,
            this.selectedPokemonAbilities.length
          );
          character.abilities.map(ability => {
            // make the first letter capitalized
            let formatAbility =
              ability.ability.name[0].toUpperCase() +
              ability.ability.name.slice(1);
            //save the ability in the array to be displayed
            this.selectedPokemonAbilities.push(formatAbility);
          });
        }
      });
    }
  }
};
</script>

<style scoped>
* {
  font-family: "Pacifico", cursive;
  font-family: "PT Sans Narrow", sans-serif;
}

body {
  background-color: whitesmoke;
}

#nameElement {
  font-size: 1.4em;
  padding-bottom: 0.9vh;
}

#abilityElement {
  font-size: 1.1em;
}
</style>
