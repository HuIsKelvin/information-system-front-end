<template>
  <!-- 检索框 -->
  <div class="search-box">
    <!-- <input type="text" v-model="query" @keyup.enter="search_query" placeholder="whatever comes to your mind">
    <button class="submit" @click="search_query">search</button> -->
    <el-form :inline="true">
      <el-input 
        v-model="query" 
        @keyup.enter.native="search_query"
        placeholder="whatever comes to your mind">
      </el-input>
      <el-button type="primary" @click="search_query">submit</el-button>
    </el-form>
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
    search_query() {
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

el-input {
  display: inline-block;
  /* width: 50px; */
}

</style>
