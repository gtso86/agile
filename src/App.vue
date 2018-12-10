<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  @import url("https://fonts.googleapis.com/css?family=Nunito:200,400,400i,700,700i");
</style>

<style lang="scss">
body,
html {
  margin: 0;
}

#app {
  font-family: 'Nunito', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#nav {
  padding: 30px;
  a {
    // font-weight: 200;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
