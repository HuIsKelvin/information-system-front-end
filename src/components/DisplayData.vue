<template>
<div>
  <div class="visual">
    <testbar :graph_id='testbar'></testbar>
  </div>
  <div class="display-data">
    <h1>PAPERS</h1>
    <ul>
      <li v-for="(paper, index) in paper_data" :key=index>
        <h3>{{paper.TI}}</h3>
        <p>ID: {{paper.UID}}</p>
      </li>
    </ul>
    <hr>
    <h1>NEWS</h1>
    <ul>
      <li v-for="(news, index) in news_data" :key=index>
        <h3>{{news.title}}</h3>
        <p>ID: {{news.ID}}</p>
      </li>
    </ul>
  </div>

</div>
</template>

<script>
  import Bus from "./bus.js"
  import testbar from './testbar.vue'

  export default {
    name: "DisplayData",
    components: {
      testbar
    },
    data() {
      return {
        data: "",
      }
    },
    computed: {
      paper_data() {
        return Bus.test_data.papers
      },
      news_data() {
        return Bus.test_data.CN_News
      }
    },
    methods: {
      // showdata() {
      //   var self = this;
      //   this.$axios.get("../../test.php")
      //     .then(res => {
      //       console.log(res.status);
      //       self.data = res.data;
      //       // console.log("after" + self.data)
      //     })
      //     .catch(err => {
      //       console.log(err);
      //       console.log("axios出错！");
      //     })
      // }
    },
  }
</script>

<style>
.display-data {
  margin: 0 auto;
  padding: 5px;
}
</style>