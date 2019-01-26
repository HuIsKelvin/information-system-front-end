<template>
  <!-- 导航栏 -->
  <div class="topnav framework-width">
  <div class="framework-width">
    <router-link to="/" tag="div">
      <a class="active" href="#home">Home</a>
    </router-link>
    <router-link to="/showBoard" tag="div"> 
      <a href="/showBoard">Board</a>
    </router-link>
    <search-box class="search-box"></search-box>
    <!-- <input class="search-box" type="text"> -->
  </div>
  </div>
</template>

<script>
  import SearchBox from './../common/SearchBox.vue'

  export default {
    components: {
      "search-box": SearchBox,
    }
  }
</script>

<style>
  * {box-sizing: border-box;}
  /*
  框架在浏览器的宽度
  --------------------------
  */
  .framework-width {
    margin: 0 auto;
    width: 100%;
  }

  /* 
  导航栏样式
   */
  .topnav {
    overflow: hidden;
    background-color: #e9e9e9;
    box-shadow: 0px 1px 2px #aaaaaa;
    /* position: fixed; */
    top: 0;
    width: 100%;
  }

  .topnav a {
    float: left;
    display: block;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }

  .topnav a:hover {
    background-color: #ddd;
    color: black;
  }

  .topnav a.active {
    background-color: #2196F3;
    color: white;
  }

  .topnav .search-box {
    float: right;
    display: block;
    margin: 10px 16px;
    height: 25px;
  }
</style>