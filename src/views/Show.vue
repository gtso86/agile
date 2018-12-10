<template>
  <div class="show">
    <Header :title="content.Title" />
    <Background :image="content.Images.Background" />
    <Footer msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/show/Header.vue';
import Background from '@/components/show/Background.vue';
import Footer from '@/components/show/Footer.vue';

export default {
  name: 'Show',
  components: {
    Header,
    Background,
    Footer,
  },
  data() {
    return {
      content: {},
    };
  },
  mounted() {
    this.$http.get(`/SHOW${this.$route.params.id}.json`).then((response) => {
      this.content = response.data;
    });
  },
};
</script>

<style lang="scss">
.img {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: top center;
  z-index: -1;
  opacity: .2;
}

.container {
  margin: 0 5.75%;
}
</style>
