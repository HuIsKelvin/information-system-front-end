<template>
  <!-- 检索框 -->
  <div class="search-box">
    <!-- <input type="text" v-model="query" @keyup.enter="search_query" placeholder="whatever comes to your mind">
    <button class="submit" @click="search_query">search</button> -->
    <el-form :inline="true">
      <el-input v-model="query" @keyup.enter.native="search_query" placeholder="whatever comes to your mind">
      </el-input>
      <!-- <el-button type="primary" @click="search_query">submit</el-button> -->
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
      // 发送检索请求
      search_query() {
        // $axios.get()...
        this.$axios.get("/api/test-data/test.json")
          .then(res => {
            // console.log("respone: " + JSON.stringify(res.data.papers[0].TI));
            console.log("respone: " + res.data.papers[0].TI);
            // console.log(res.data);
            Bus.receive_result(res.data);
            // Bus.query_data.query_result = res.data;
          })
          .catch(err => {
            console.log(err);
          })
        console.log(this.query);
        // 更新 bus 里的搜索结果
        Bus.update_query_text(this.query);
        console.log("from bus: " + Bus.query_data.query_text);
        // 是否保留上次的检索
        // this.query = "";
        this.$router.push("/ShowBoard")

        // ----------------------------------------------------
        // this.$axios.post("/api/MINA_STEP1/aitest.php", {
        //   "page": "page",
        //   "search": "SVM",
        //   "way": "All",
        //   "info": "",
        //   "seq": "correlation"
        // })
        //   .then(res => {
        //     console.log(res.data);
        //   })
        //   .catch(err => {
        //     console.log(err);
        //   })
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