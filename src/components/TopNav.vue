<template>
  <div class="topnav framework-width">
  <div class="framework-width">
    <router-link to="/" tag="div">
      <a class="active" href="#home">Home</a>
    </router-link>
    <router-link to="/About" tag="div"> 
      <a href="#about">About</a>
    </router-link>
    <input class="searchBox" type="text">
  </div>
  </div>
</template>

<script>
  export default {

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
    width: 60%;
  }

  /* 
  导航栏样式
   */
  .topnav {
    overflow: hidden;
    background-color: #e9e9e9;
    box-shadow: 0px 1px 2px #aaaaaa;
    position: fixed;
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

  .topnav .searchBox {
    float: right;
    display: block;
    margin: 10px 16px;
    height: 25px;
  }
</style>