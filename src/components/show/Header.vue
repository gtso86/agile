<template>
  <header class="show-header">
    <div class="container">
      <h1 class="show-header_title">{{ title }}</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.show-header {
  margin-top: 30px;

  &_title {
    color: white;
    font-size: 72px;
    letter-spacing: 2px;
    margin: 0;
    position: relative;
    z-index: 1;
  }

  &:before {
    box-shadow: 0px 90px 300px 60px rgba(0, 0, 0, 0);
    content: "";
    height: 0;
    left: -100px;
    pointer-events: none;
    position: absolute;
    top: 60px;
    transform: rotate(-10deg);
    width: 600px;
  }
}
</style>
