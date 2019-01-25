<template>
  <!-- 检索框 -->
  <div class="search-box">
    <input type="text" v-model="query" placeholder="whatever comes to your mind">
    <button class="submit" @click="search">search</button>
  </div>
</template>

<script>
import Bus from "./../bus.js"
export default {
  name: "SearchBox",
  data() {
    return {
      query: ""
    }
  },
  methods: {
    search() {
      console.log(this.query);
      Bus.update_query(this.query);
      console.log("from bus: " + Bus.query_data.query_text);
      // this.query = "";
      this.$router.push("/ShowBoard")
    }
  }
}
</script>

<style>
.search-box {
  display: inline-block;
}

</style>
