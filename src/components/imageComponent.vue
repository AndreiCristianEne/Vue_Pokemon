<template>
  <b-img
    :src="require(`../assets/${this.name}.jpg`)"
    :alt="`${this.name}` + ' Image'"
    v-bind="mainProps"
    rounded
    :class="isHovered ? 'hovered' : ''"
    v-b-hover="handleHover"
    class="pokemonImg"
  ></b-img>
</template>

<script>
export default {
  name: "imageComponent",
  data() {
    return {
      isHovered: false,
      mainProps: {
        center: true,
        width: 150,
        height: 150,
        class: "m1"
      }
    };
  },
  props: { name: String },
  methods: {
    handleHover(hovered) {
      this.isHovered = hovered;
    }
  }
};
</script>

<style scoped>
.hovered {
  border: 0.2vw solid #d1d1e0;
  cursor: pointer;
}

.pokemonImg:active {
  border: 0.2vw solid #80d4ff;
}
</style>
