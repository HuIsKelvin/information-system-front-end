<template>
  <div class="show-board">
    <div class="card-board">
      <p>What you search: </p>
      <h1>{{show_query}}</h1>
    </div>

    <el-row :gutter="20">
      <el-col :span="16">
        <!-- 展示数据 -->
        <h1>数据展示</h1>
        <data-board></data-board>
      </el-col>

      <el-col :span="8">
        <!-- 展示可视化图 -->
        <h1>可视化</h1>
        <visual-board></visual-board>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Bus from "./../components/bus.js"
import DataBoard from './../components/DataBoard'
import VisualBoard from "./../components/VisualBoard"
import testbar from './../components/testbar'

export default {
  components:{
    "data-board": DataBoard,
    "visual-board": VisualBoard,
    // testbar
  },
  data () {
    return {
    }
  },
  computed: {
    // 展示检索输入的词
    show_query() {
      return Bus.get_query_text();
    }
  }
}
</script>

<style>
.show-board {
  width: 100%;
  margin: 0 auto;
}

.card-board {
  margin-bottom: 10px;
  /* margin-bottom: 10px; */
}
</style>