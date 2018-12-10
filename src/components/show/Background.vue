<template>
  <div class="show-background">
    <img
      class="show-background_image"
      v-if="image"
      :src="image"
    />
  </div>
</template>

<script>
export default {
  name: 'Background',
  props: {
    image: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.show-background {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;

  &:after {
    box-shadow: inset 0px 15px 230px 60px rgba(0, 0, 0, 0.85);
    content: "";
    height: 100%;
    left: -15%;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 115%;
  }

  &_image {
    height: 100%;
    object-fit: cover;
    object-position: center center;
    width: 100%;
  }
}
</style>
