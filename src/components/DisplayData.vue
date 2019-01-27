<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="16">
        <div class="display-data">
          <!-- 展示论文 -->
          <div class="show-pane">
            <el-card>
              <div>PAPER</div>
              <!-- <ul>
                <li v-for="(paper, index) in paper_data" :key=index>
                  <p>TITLE: {{paper.TI}}</p>
                  <p>ID: {{paper.UID}}</p>
                </li>
              </ul> -->
              <div v-for="(paper, index) in paper_data" :key=index>
                <p>{{paper.TI}}</p>
                <p>ID: {{paper.UID}}</p>
              </div>
            </el-card>
          </div>
          
          <!-- 展示新闻 -->
          <div class="show-pane">
            <el-card>
              <div>NEWS</div>
                <div v-for="(news, index) in news_data" :key=index>
                  <p>{{news.title}}</p>
                  <p>ID: {{news.ID}}</p>
                </div>
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
          <testbar 
            g-id='testbar'
            g-title="例子-柱状图"
            g-subtitle="副标题">
          </testbar>
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
        // return Bus.test_data.papers
        return this.result.papers;
      },
      news_data() {
        return this.result.CN_News;
      },
      // 获取 bus 里的搜索结果
      result() {
        console.log("bus数据改变了")
        return Bus.query_data.query_result;
      }
    },
    methods: {
    }
  }
</script>

<style>
  ul,
  li {
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