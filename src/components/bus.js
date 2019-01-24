/*
bus作为数据存储中心，并负责组件间数据通信
在用到bus的组件中，都需要import Bus from path

组件直接使用bus的数据，在 computed 中 return Bus. data
发送 Bus.$emit(eventname, value)
监听 Bus.$on(eventname, function(value){ 对应操作 })

来源：https://www.jb51.net/article/136758.htm
*/

import Vue from 'vue'

export default new Vue({
  data() {
    return {
      data: "origin data",
      query: "",
    }
  },
  methods: {
    getLastQuery() {
      return this.query;
    },
    update() {
      // 监听事件，更新数据
      this.$on("update_data", (val) => {
        this.data = val;
      })
    }
  },
  created() {
    // 监听事件
    this.$on("update_data", (val) => {
      this.data = val;
    })
  }
});