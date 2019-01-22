<template>
  <div id="app">
    <div id="nav">
      <div class="top-nav">
        <top-nav></top-nav>
      </div>
      <!--
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      -->
    </div>
    <div class="content">
      <router-view class="view"/>
    </div>
    <vfooter class="footer"></vfooter>
  </div>
</template>

<script>
import TopNav from './components/TopNav'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    "top-nav": TopNav,
    "Vfooter": Footer
  }
}
</script>

<style>
* {
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.content {
  height:500px;
  background-color: beige;
}

.view {
  height: 600px;
}

.footer {
  width: 100%;
  min-height: 200px;
  background-color: aquamarine;
}
</style>
