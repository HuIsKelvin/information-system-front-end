<template>
  <div class="home">
    <!-- <div class="test">
      测试bus在组件间通信
      <coma></coma>
      <comb></comb>
    </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
// import coma from '@/components/coma.vue'
// import comb from '@/components/comb.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld,
    coma,
    comb
  }
}
</script>

<style>
.test {
  border: 1px solid white;
}
</style>

