<template>
  <div class="show-board">
    <h1>what you search: {{show_query}}</h1>
    <display-data></display-data>
  </div>
</template>

<script>
import Bus from "./../components/bus.js"
import DisplayData from './../components/DisplayData'

export default {
  components:{
    "display-data": DisplayData
  },
  data () {
    return {
    }
  },
  computed: {
    show_query() {
      return Bus.query_data.query_text;
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

.show-board {
  width: 100%;
  margin: 0 auto;
}
</style>