<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul>
      <li v-for="(item,index) in items" :key="index">{{index}}<h5>{{item}}</h5></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: ["item1", "item2"],
    }
  }  
}
</script>

<style>
h5 {
  display: inline-block;
  padding-left: 20px;
}

ul {
  list-style: none;
}
</style>


