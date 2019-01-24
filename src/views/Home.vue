<template>
  <div class="home">
    <!--
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>This a Vue demo</h1>
    -->
    <coma></coma>
    <comb></comb>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import coma from '@/components/coma.vue'
import comb from '@/components/comb.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld,
    coma,
    comb
  }
}
</script>
