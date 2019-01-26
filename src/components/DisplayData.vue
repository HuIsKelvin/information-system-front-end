<template>
  <div>
    <div>
      <p>响应式结果</p>
      <ul>
        <li v-for="(paperresult, index) in result" :key=index>{{paperresult.TI}}</li>
      </ul>
    </div>
    <el-row :gutter="20">
      <el-col :span="16">
        <div class="display-data">
          <!-- 展示论文 -->
          <div class="show-pane">
            <el-card>
              <div>PAPER</div>
              <ul>
                <li v-for="(paper, index) in paper_data" :key=index>
                  <p>{{paper.TI}}</p>
                  <p>ID: {{paper.UID}}</p>
                </li>
              </ul>
            </el-card>
          </div>
          
          <!-- 展示新闻 -->
          <div class="show-pane">
            <el-card>
              <div>NEWS</div>
              <ul>
                <li v-for="(news, index) in news_data" :key=index>
                  <p>{{news.title}}</p>
                  <p>ID: {{news.ID}}</p>
                </li>
              </ul>
            </el-card>
          </div>

          <!-- 展示专利 -->
          <div class="show-pane">
            <el-card>
              <div>PATENT</div>
            </el-card>
          </div>
        </div>
      </el-col>

      <el-col :span="8">
        <div class="visual">
          <testbar graph_id='testbar'></testbar>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Bus from "./bus.js"
  // 测试用柱状图
  import testbar from './testbar.vue'

  export default {
    name: "DisplayData",
    components: {
      testbar
    },
    data() {
      return {
        data: "",
        // 检索结果数据
        result_data: ""
      }
    },
    computed: {
      paper_data() {
        // console.log("实时响应数据变化")
        return Bus.test_data.papers
      },
      news_data() {
        return Bus.test_data.CN_News
      },
      result() {
        console.log("bus数据改变了")
        return Bus.query_data.query_result.papers;
      }
    },
    methods: {
      // 无法加载本地文件
      // showdata() {
      //   var self = this;
      //   let url = "http://localhost:8080/assets/test.json";
      //   this.$axios.get(url)
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
    }
  }
</script>

<style>
  ul {
    list-style: none;
  }

  .show-pane {
    margin: 5px auto 20px auto;
  }

  .display-data {
    margin: 0 auto;
    padding: 5px;
  }
</style>