<template>
  <div class="home">
    <!-- <h1>Home Page</h1> -->
    <!-- 搜索框 + 封面 -->
    <div class="home-pane">
      <search-box class="center search-box"></search-box>
    </div>
    <!-- 词云 -->
    <!-- 响应式布局 -->
    <div class="home-pane">
      <el-row>
        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
          <h1>AI Field</h1>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
          <h1>AI ORG</h1>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
          <h1>AI TECH</h1>
        </el-col>
      </el-row>
    </div>
    <!-- 资讯 -->
    <div class="home-pane">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem repudiandae perferendis
      reiciendis, ipsam atque adipisci, provident dolores quae voluptates maiores facere eos quidem architecto nemo at
      totam vel nesciunt magni!</div>
    <!-- 资讯 -->
    <div class="home-pane">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptatem ad fuga, quis
      dolores molestiae in atque unde, iusto facere natus illum aperiam quaerat magni quod. Expedita, ab. Neque,
      obcaecati.</div>
  </div>
</template>

<script>
  import SearchBox from "./../components/common/SearchBox"

  export default {
    name: 'home',
    components: {
      "search-box": SearchBox
    },
    methods: {
    }
  }
</script>

<style>
  .center {
    margin: 0 auto;
  }

  .home {
    margin: 0 auto;
    text-align: center;
  }

  .home-pane {
    min-height: 200px;
    border: 1px solid grey;
    padding: 10px 5px;
    margin: 5px;
  }

  .search-box {
    margin: 50px auto;
    }
</style>