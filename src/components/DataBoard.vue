<template>
  <div class="data-board">
    <!-- 展示论文 -->
    <div class="show-pane">
      <el-card>
        <div class="categories">PAPER</div>
        <div class="data-item" v-for="(paper, index) in paper_data" :key=index>
          <p>{{paper.TI}}</p>
          <p>{{paper.UID}}</p>
        </div>
      </el-card>
    </div>

    <!-- 展示新闻 -->
    <div class="show-pane">
      <el-card>
        <div class="categories">NEWS</div>
        <div class="data-item" v-for="(news, index) in news_data" :key=index>
          <p>{{news.title}}</p>
          <p>{{news.ID}}</p>
          <p>{{news.release_time}}</p>
        </div>
      </el-card>
    </div>

    <!-- 展示专利 -->
    <div class="show-pane">
      <el-card>
        <div class="categories">PATENT</div>
      </el-card>
    </div>
  </div>
</template>

<script>
  import Bus from "./bus.js"

  export default {
    name: "DataBoard",
    components: {},
    data() {
      return {
        data: "",
        // 检索结果数据
        // result_data: ""
      }
    },
    computed: {
      result() {
        console.log("bus数据改变了")
        return Bus.get_result();
      },
      paper_data() {
        // console.log("实时响应数据变化")
        // return Bus.test_data.papers
        return this.result.papers;
      },
      news_data() {
        return this.result.CN_News;
      },
      // 获取 bus 里的搜索结果
    },
    methods: {}
  }
</script>

<style>
  .show-pane {
    margin: 5px auto 20px auto;
  }

  .data-board {
    margin: 0 auto;
    padding: 5px;
  }

  .categories {
    font-size: 1.5em;
    display: block;
    padding: 2px 0 10px 0;
  }

  .data-item {
    margin: 10px;
  }
</style>